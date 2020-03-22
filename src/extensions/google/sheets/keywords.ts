import {
  Keyword,
  TestxContext,
  TestxKeywords,
} from '../../../utils/keywords-utils';
import { Sheets } from './api';

const sheets = new Sheets();
const keywords: TestxKeywords = {};

export { keywords };

/**
 * Gmail keywords.
 */
class GmailKeywords {
  @Keyword('login to sheets', keywords)
  login(args: any, context: TestxContext) {
    return sheets.login(args.client, args.credentials);
  }

  @Keyword('get sheets spreadsheet', keywords)
  getSpreadsheetById(args: any, context: TestxContext) {
    return sheets
      .getSpreadsheetById(args.spreadsheetId)
      .then((data) => (context.spreadsheet = data));
  }

  @Keyword('get sheets spreadsheet values', keywords)
  getSpreadsheetValuesById(args: any, context: TestxContext) {
    return sheets
      .getSpreadsheetValuesById(args.spreadsheetId, args.range)
      .then((data) => (context.spreadsheetValues = data));
  }

  @Keyword('update sheets spreadsheet values', keywords)
  updateSpreadsheetValuesById(args: any, context: TestxContext) {
    return sheets
      .updateSpreadsheetValuesById(args.spreadsheetId, args.values, args.range)
      .then((data) => (context.spreadsheetUpdateValuesResponse = data));
  }
}
