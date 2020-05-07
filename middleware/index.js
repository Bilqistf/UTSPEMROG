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

//menambahkan data montir
router.post('/api/v1/inputmontir',verifikasi(), auth.inputmontir);
//menambahkan data sparepart
router.post('/api/v1/tambahsparepart',verifikasi(), auth.tambahsparepart);
//menambahkan data user
router.post('/api/v1/tambahuser',verifikasi(), auth.tambahuser);
//menambahkan level
router.post('/api/v1/tambahlevel',verifikasi(), auth.tambahlevel);
module.exports = router;