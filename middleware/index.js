var express = require('express');
var auth = require('./auth');
var router = express.Router();
var verifikasi = require('./verifikasi');
//daftarkan menu registrasi
router.post('/api/v1/register', auth.registrasi);
router.post('/api/v1/login', auth.login);

//alamat yang perlu otorisasi
router.get('/api/v1/rahasia', verifikasi(), auth.halamanrahasia);
router.get('/api/v1/rahasia1', verifikasi(), auth.halamanrahasia1);

//menambahkan data t_service
router.post('/api/v1/tambahdataservice',verifikasi(),auth.tambahdataservice);
router.put('/api/v1/ubahservis',verifikasi(), auth.ubahservis);
router.delete('/api/v1/hapusservis',verifikasi(), auth.hapusservis);

//hitung
router.get('/api/v1/totalservis',verifikasi(), auth.totalservis);

//menambahkan & mengubah & menghapus data montir
router.post('/api/v1/inputmontir',verifikasi(), auth.inputmontir);
router.put('/api/v1/ubahmontir',verifikasi(), auth.ubahmontir);
router.delete('/api/v1/hapusmontir',verifikasi(), auth.hapusmontir);

//menambahkan & mengubah & menghapus data sparepart
router.post('/api/v1/tambahsparepart',verifikasi(), auth.tambahsparepart);
router.put('/api/v1/ubahsparepart',verifikasi(), auth.ubahsparepart);
router.delete('/api/v1/hapussparepart',verifikasi(), auth.hapussparepart);

//menambahkan & mengubah & menghapus data user
router.post('/api/v1/tambahuser',verifikasi(), auth.tambahuser);
router.put('/api/v1/ubahuser',verifikasi(), auth.ubahuser);
router.delete('/api/v1/hapususer',verifikasi(), auth.hapususer);

//menambahkan & mengubah & menghapus level
router.post('/api/v1/tambahlevel',verifikasi(), auth.tambahlevel);
router.put('/api/v1/ubahlevel',verifikasi(), auth.ubahlevel);
router.delete('/api/v1/hapusLevel',verifikasi(), auth.hapusLevel);


module.exports = router;