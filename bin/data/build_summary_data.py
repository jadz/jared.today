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

    string_cols = ['Programme', 'Phase']
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


def calculate_fat_loss(calorie_deficit):
    CALORIES_BURN_1KG_FAT = 7700
    return (calorie_deficit/CALORIES_BURN_1KG_FAT)

def generate_summaries(df):
    today = datetime.strptime(datetime.today().strftime('%d%m%Y'), "%d%m%Y")
    monday_this_week = today - timedelta(days = today.weekday())

    until_day = datetime.today()

    monday_last_week = monday_this_week - timedelta(weeks = 1)

    # Last Week
    # 1. Average daily calorie difference from maintenance (i.e -500) 
    # 2. Average BF% decrease (-0.5%)
    # 3. Average kg decrease 

    # This month:
    # 1. Average weekly calorie diff
    # 2. Average weekly BF% decrease
    # 3. Average weekly kg decrease

    df["Body Weight Difference"] = df["Body Weight"].diff()
    df["Body Fat Difference"] = df["Body Fat"].diff()


    ##########################################################################################
    ## LAST WEEK
    ##########################################################################################
    # LAST WEEK - BODY WEEK
    body_weight_diff_week = df.query("Date >= @monday_last_week and Date <= @until_day") \
       .groupby(pd.Grouper(freq='W', level='Date'))['Body Weight Difference'].sum()

    body_weight_avg_week = df.query("Date >= @monday_last_week and Date <= @until_day") \
       .groupby(pd.Grouper(freq='W', level='Date'))['Body Weight'].mean()

    # LAST WEEK - BODY FAT
    body_fat_diff_week = df.query("Date >= @monday_last_week and Date <= @until_day") \
       .groupby(pd.Grouper(freq='W', level='Date'))['Body Fat Difference'].sum()

    body_fat_avg_week = df.query("Date >= @monday_last_week and Date <= @until_day") \
       .groupby(pd.Grouper(freq='W', level='Date'))['Body Fat'].mean()

    # LAST WEEK - ABOVE / BELOW MAINTENANCE
    calorie_burn_averages_weekly = df.query("Date >= @monday_last_week and Date <= @until_day") \
       .groupby(pd.Grouper(freq='W', level='Date'))['Maintenance Calorie Diff'].mean()

    calories_burn_maintenance_weekly = df.query("Date >= @monday_last_week and Date <= @until_day") \
        .groupby(pd.Grouper(freq='W', level='Date'))['Maintenance Calorie Diff'].sum()
    
    ##########################################################################################
    ## 4 WEEKS AGO
    ##########################################################################################
    monday_4_weeks_ago = today - timedelta(days = today.weekday(), weeks=4)

    calorie_burn_average_4_weeks = df.query("Date >= @monday_4_weeks_ago and Date <= @until_day") \
        ['Maintenance Calorie Diff'].mean()

    calories_burn_total_maintenance_4_weeks = df.query("Date >= @monday_4_weeks_ago and Date <= @until_day") \
        ['Maintenance Calorie Diff'].sum()

    body_weight_diff_4_weeks = df.query("Date >= @monday_last_week and Date <= @until_day") \
        ['Body Weight Difference'].sum()

    body_fat_diff_4_weeks = df.query("Date >= @monday_last_week and Date <= @until_day") \
        ['Body Fat Difference'].sum()


    output = {}
    output["last-week-calorie-burn-maintenance"] = calorie_burn_averages_weekly.iloc[0]
    output["last-week-body-kg-diff"] = body_weight_diff_week.iloc[0]
    output["last-week-body-kg-avg"] = body_weight_avg_week.iloc[0]
    output["last-week-body-fat-diff"] = body_fat_diff_week.iloc[0]
    output["last-week-body-fat-avg"] = body_fat_avg_week.iloc[0]

    output["last-4-week-calorie-burn-maintenance"] = calorie_burn_average_4_weeks
    output["last-4-week-body-kg-diff"] = calculate_fat_loss(calories_burn_total_maintenance_4_weeks)
    output["last-4-week-body-fat-diff"] = body_fat_diff_4_weeks


    json_string = json.dumps(output)

    with open('../../static/summary-data/data.json','w') as outfile:
        outfile.write(json_string)

    print(output)


generate_summaries(df)