import { GoogleCore } from '../core';
import { Credentials, OAuth2ClientOptions } from 'google-auth-library';
import { sheets_v4 } from 'googleapis';
import { sheets } from 'googleapis/build/src/apis/sheets';
import Spreadsheet = sheets_v4.Schema$Spreadsheet;
import UpdateValuesResponse = sheets_v4.Schema$UpdateValuesResponse;

export class Sheets extends GoogleCore {
  private sheetsApi: sheets_v4.Sheets;

  login(
    oAuth2ClientOptions: OAuth2ClientOptions,
    credentials: Credentials
  ): Promise<void> {
    return super.login(oAuth2ClientOptions, credentials).then(() => {
      this.sheetsApi = sheets({ version: 'v4', auth: this.oAuth2Client });
    });
  }

  getSpreadsheetById(spreadsheetId: string): Promise<Spreadsheet> {
    return this.sheetsApi.spreadsheets
      .get({
        spreadsheetId: spreadsheetId,
      })
      .then((response) => response.data);
  }

  getSpreadsheetValuesById(
    spreadsheetId: string,
    range: string
  ): Promise<any[][]> {
    return this.sheetsApi.spreadsheets.values
      .get({
        spreadsheetId: spreadsheetId,
        range: range,
      })
      .then((response) => response.data.values);
  }

  updateSpreadsheetValuesById(
    spreadsheetId: string,
    values: any[][],
    range: string
  ): Promise<UpdateValuesResponse> {
    return this.sheetsApi.spreadsheets.values
      .update({
        spreadsheetId: spreadsheetId,
        range: range,
        valueInputOption: 'RAW',
        requestBody: { values: values },
      })
      .then((response) => response.data);
  }
}
