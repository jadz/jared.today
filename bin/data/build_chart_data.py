from __future__ import print_function

import os
import base64
import pandas as pd
import json as json
import numpy as np

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

from google.oauth2 import service_account

from datetime import datetime, timedelta
from dateutil.relativedelta import relativedelta

def calculate_calorie_percent(x,y):
    return (x-y)/x*100

def calculate_calorie_diff(x,y):
    return (x-y)

def make_data_frame_from_list(list):
    cols = list.pop(0)
    df = pd.DataFrame(data=list, columns=cols)
    dfCols = df.columns

    # Set the Date column to be date time dType
    df['Date'] = pd.to_datetime(df['Date'], dayfirst=True)

    string_cols = ['Programme', 'Phase', 'Healthy or Sick', 'Book', 'Fast Type']
    ignore_cols = ['Date'] + string_cols

    ## Go through columns we want to convert to numbers
    cols_to_num = [i for i in df.columns if i not in ignore_cols]
    for col in cols_to_num:
        df[col] = df[col].apply(pd.to_numeric, errors='coerce')

    ## Go through columns we want to conver to strings
    for col in string_cols:
        df[col] = df[col].astype(str)

    # Set the index of the data frame to be a date
    df.set_index(['Date'], inplace=True)

    df['Calories Percent'] = df.apply(lambda x: calculate_calorie_percent(x['Calories Consumed'], x['Calories Burned']), axis=1)
    df['Maintenance Calorie Diff'] = df.apply(lambda x: calculate_calorie_diff(x['Calories Consumed'], x['Calories Burned']), axis=1)

    return df

# If modifying these scopes, delete the file token.json.
SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']

SERVICE_ACCOUNT_FILE = 'keys-local.json'

## TODO
## Update the bash file to load lal the env variables from the json file
## Update this to use service_info pulling from each env var
## Update amplify to pull from env vars
## Create lambda function to hit webook on interval

GOOGLE_AUTH_TYPE = os.environ.get("GOOGLE_AUTH_TYPE")
GOOGLE_PROJECT_ID = os.environ.get("GOOGLE_PROJECT_ID")
GOOGLE_PRIVATE_KEY_ID = os.environ.get("GOOGLE_PRIVATE_KEY_ID")
GOOGLE_PRIVATE_KEY = base64.b64decode(os.environ.get("GOOGLE_PRIVATE_KEY"))
GOOGLE_CLIENT_EMAIL = os.environ.get("GOOGLE_CLIENT_EMAIL") #
GOOGLE_CLIENT_ID = os.environ.get("GOOGLE_CLIENT_ID")
GOOGLE_AUTH_URI = os.environ.get("GOOGLE_AUTH_URI")
GOOGLE_TOKEN_URI = os.environ.get("GOOGLE_TOKEN_URI") #
GOOGLE_AUTH_PROVIDER = os.environ.get("GOOGLE_AUTH_PROVIDER")
GOOGLE_CLIENT_X509 = os.environ.get("GOOGLE_CLIENT_X509")

# credentials = None
# credentials = service_account.Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=SCOPES)

account_info = {
    "type": GOOGLE_AUTH_TYPE,
    "project_id": GOOGLE_PROJECT_ID,
    "private_key_id": GOOGLE_PRIVATE_KEY_ID,
    "private_key": GOOGLE_PRIVATE_KEY,
    "client_email": GOOGLE_CLIENT_EMAIL,
    "client_id": GOOGLE_CLIENT_ID,
    "auth_uri": GOOGLE_AUTH_URI,
    "token_uri": GOOGLE_TOKEN_URI,
    "auth_provider_x509_cert_url": GOOGLE_AUTH_PROVIDER,
    "client_x509_cert_url": GOOGLE_CLIENT_X509
}

credentials = service_account.Credentials.from_service_account_info(account_info, scopes=SCOPES)


SAMPLE_SPREADSHEET_ID = '1ohNM7O8Ecg1EtI3WLv3MbyuKLP7gm7WQFufcqylxeUQ'
# SAMPLE_RANGE_NAME = 'Daily Log Test!A1:N498'
SAMPLE_RANGE_NAME = 'Daily Log!A1:AA600'

service = build('sheets', 'v4', credentials=credentials)

# Call the Sheets API
daily_log_sheet = service.spreadsheets()
daily_log_results = daily_log_sheet.values().get(spreadsheetId=SAMPLE_SPREADSHEET_ID, range=SAMPLE_RANGE_NAME).execute()
daily_log_values = daily_log_results.get('values', [])

if not daily_log_values:
    print('No data found.')
    exit()

total_number_columns = len(daily_log_values[0])

validated_list_for_data_frame = []
validated_list_for_data_frame.append(daily_log_values[0])

for i in range(1, len(daily_log_values)):
    # Fill the rest of the list with empty values
    number_columns = len(daily_log_values[i])
    daily_log_values[i].extend([''] * (total_number_columns - number_columns))
    validated_list_for_data_frame.append(daily_log_values[i])

df = make_data_frame_from_list(validated_list_for_data_frame)

def single_line_graph(df, column, weeks):
    now = datetime.now().date()

    monday_this_week = now - timedelta(days = now.weekday())
    sunday_this_week = monday_this_week + timedelta(days=6)

    monday_12_weeks_ago = monday_this_week - timedelta(weeks=weeks)

    df2 = df.query("Date >= @monday_12_weeks_ago and Date <= @now") \
    .groupby(pd.Grouper(freq='W', level='Date'))[column].mean(numeric_only=True)

    reformatted_data = []
    for index, item in df2.items():
            points = {}
            points["x"] = index.strftime("%d-%b")
            points["y"] = np.nan_to_num(item)
            reformatted_data.append(points)

    return reformatted_data

def single_line_graph_from_date(df, column, weeks, from_date):

    monday_from_date = from_date - timedelta(days = from_date.weekday())
    sunday_from_date = monday_from_date + timedelta(days=6)

    monday_in_n_weeks = monday_from_date + timedelta(weeks=weeks)

    df2 = df.query("Date < @monday_in_n_weeks and Date >= @monday_from_date") \
    .groupby(pd.Grouper(freq='W', level='Date'))[column].mean(numeric_only=True)

    reformatted_data = []
    for index, item in df2.items():
            points = {}
            points["x"] = index.strftime("%d-%b")
            points["y"] = np.nan_to_num(item)
            reformatted_data.append(points)

    return reformatted_data

def heatmap_data(df, column, months, value_as_num=True, show_historical_data=True, oldest_first=True):
    output_data = []

    for n in range(0,months):
        if (show_historical_data):
            start_month = (datetime.now().date() - relativedelta(months=n)).replace(day=1)
        else: 
            start_month = (datetime.now().date() + relativedelta(months=n)).replace(day=1)

        end_month = start_month + relativedelta(months=1)

        data = df.query("Date >= @start_month and Date < @end_month")[column]

        month_data = {}
        month_data["name"] = start_month.strftime("%B")

        # pad out the array with 0's if the data starts mid month
        reformatted_data = []
        day_indexes = data.head(1).index.day.tolist()
        if (len(day_indexes) > 0):
            first_day = data.head(1).index.day.tolist()[0]

            if first_day > 1:
                for i in range(1, first_day):
                    points = {}
                    points["x"] = str(i)
                    points["y"] = 0
                    reformatted_data.append(points)

        for index, item in data.items():
            points = {}
            points["x"] = index.strftime("%d")
            points["y"] = np.nan_to_num(item) if value_as_num == True else item
            reformatted_data.append(points)

        month_data["data"] = reformatted_data

        output_data.append(month_data)

    if (oldest_first == True):
        return output_data # Returns the list with oldest to newest
    else:
        return output_data[::-1] # Returns the list newest to oldest

push_ups = heatmap_data(df, 'Push Up Count', 3)
water_consumption = heatmap_data(df, 'Water Consumed', 3)
calories = heatmap_data(df, 'Calories Percent', 6)
fiveam_streak = heatmap_data(df, '5AM Walk', 3)
pages_read = heatmap_data(df, 'Pages Read', 3)
sleep_hours = heatmap_data(df, 'Sleep Hours', 3)
step_count = heatmap_data(df, 'Step Count', 3)
body_fat = single_line_graph_from_date(df, 'Body Fat', 12, datetime.strptime("01012023", "%d%m%Y"))
body_fat_goal = single_line_graph_from_date(df, 'Body Fat Goal', 12, datetime.strptime("01012023", "%d%m%Y"))
body_weight = single_line_graph_from_date(df, 'Body Weight', 12, datetime.strptime("01012023", "%d%m%Y"))
body_weight_goal = single_line_graph_from_date(df, 'Body Weight Goal', 12, datetime.strptime("01012023", "%d%m%Y"))
training_plan = heatmap_data(df, 'Programme', 6, value_as_num=False, show_historical_data=False, oldest_first=False)
nutrition_plan = heatmap_data(df, 'Phase', 6, value_as_num=False, show_historical_data=False, oldest_first=False)

out = {}

out["pushup-data"] = push_ups
out["water-consumption-data"] = water_consumption
out["calories-data"] = calories
out["fiveam-data"] = fiveam_streak
out["pages-read-data"] = pages_read
out["sleep-data"] = sleep_hours
out["step-count-data"] = step_count

out["body-weight-data"] = body_weight
out["body-weight-goal-data"] = body_weight_goal

out["bodyfat-data"] = body_fat
out["bodyfat-goal-data"] = body_fat_goal

out["training-plan-data"] = training_plan
out["nutrition-plan-data"] = nutrition_plan

json_string = json.dumps(out)

with open('../../static/chart-data/data.json','w') as outfile:
    outfile.write(json_string)