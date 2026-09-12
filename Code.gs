function doPost(e) {
  const SHEET_NAME = 'Buyurtmalar';
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['Sana', 'Ism', 'Telefon', 'Qulay vaqt']);
  }

  const p = e && e.parameter ? e.parameter : {};
  sheet.appendRow([
    new Date(),
    p.name || '',
    p.phone || '',
    p.time || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ok:true}))
    .setMimeType(ContentService.MimeType.JSON);
}