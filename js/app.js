const API_URL='https://script.google.com/macros/s/AKfycbxoZarMVB-mAIQdWu9drHPi31suYpLum7D9qfTL9rmdBZdO0saESZI0N5zxEtijVmw1Sg/exec';

document.getElementById('aduanForm').addEventListener('submit', async e=>{
 e.preventDefault();
 const data={
 nama:nama.value,
 hp:hp.value,
 alamat:alamat.value,
 jenis:jenis.value,
 deskripsi:deskripsi.value,
 status:'Masuk',
 waktu:new Date().toISOString()
 };
 if(navigator.onLine){
  await fetch(API_URL,{method:'POST',body:JSON.stringify(data)});
  alert('Aduan terkirim');
 }else{
  localStorage.setItem('aduan_offline',JSON.stringify(data));
  alert('Data tersimpan offline');
 }
});
