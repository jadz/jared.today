from __future__ import print_function

import os.path
import pandas as pd

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

from google.oauth2 import service_account


# If modifying these scopes, delete the file token.json.
SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']

SERVICE_ACCOUNT_FILE = 'key-dev.json'

credentials = None
credentials = service_account.Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=SCOPES)

SAMPLE_SPREADSHEET_ID = '1ohNM7O8Ecg1EtI3WLv3MbyuKLP7gm7WQFufcqylxeUQ'
SAMPLE_RANGE_NAME = 'Daily Log Test!A1:N498'

def main():

    try:
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

        make_body_fat_data(df)


    except HttpError as err:
        print(err)

def make_data_frame_from_list(list):
    cols = list.pop(0)
    df = pd.DataFrame(data=list, columns=cols)
    df['Date'] = pd.to_datetime(df['Date'])
    return df

def make_body_fat_data(df):
    print(df)

if __name__ == '__main__':
    main()