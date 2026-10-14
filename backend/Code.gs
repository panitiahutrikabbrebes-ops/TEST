const SHEET_ID='ISI_ID_GOOGLE_SHEET';
function doPost(e){
 const data=JSON.parse(e.postData.contents);
 const sheet=SpreadsheetApp.openById(SHEET_ID).getSheetByName('ADUAN');
 sheet.appendRow([new Date(),data.nama,data.hp,data.alamat,data.jenis,data.deskripsi,data.status]);
 return ContentService.createTextOutput(JSON.stringify({status:'success'}));
}
