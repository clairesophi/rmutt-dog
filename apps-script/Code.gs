/**
 * rmutt.dog restock list — Google Apps Script web app.
 * Appends {timestamp, email, page} rows to the attached Google Sheet.
 *
 * Setup (once):
 * 1. Make a Google Sheet named "rmutt.dog restock list".
 * 2. Extensions → Apps Script, paste this file, save.
 * 3. Deploy → New deployment → Web app.
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the web app URL into SHEETS_ENDPOINT in signup.js.
 */

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var email = (e.parameter.email || "").toString().slice(0, 200);
  var page = (e.parameter.page || "").toString().slice(0, 100);
  if (email) {
    sheet.appendRow([new Date(), email, page]);
  }
  return ContentService.createTextOutput("ok");
}
