var connection = require('../koneksi');
var mysql = require('mysql');
var md5 = require('md5');
var response = require('../res');
var jwt = require('jsonwebtoken');
var config = require('../config/secret');
var ip = require('ip');

//controller untuk register
exports.registrasi = function(req,res) {
    var post = {
        nama_user: req.body.nama_user,
        email: req.body.email,
        password: md5(req.body.password),
        level: req.body.level,
        tanggal_daftar: new Date()
    }

    var query = "SELECT email FROM ?? WHERE ??=?";
    var table = ["t_user", "email", post.email];

    query = mysql.format(query,table);

    connection.query(query, function(error, rows) {
        if(error){
            console.log(error);
        }else {
            if(rows.length == 0){
                var query = "INSERT INTO ?? SET ?";
                var table = ["t_user"];
                query = mysql.format(query, table);
                connection.query(query, post, function(error, rows){
                    if(error){
                        console.log(error);
                    }else {
                        response.ok("Berhasil menambahkan data user baru", res);
                    }
                });
            }else {
                response.ok("Email sudah terdaftar!",res);
            }
        }
    })
}

//controller untuk login
exports.login = function(req,res){
    var post = {
    password: req.body.password,
    email: req.body.email
    }

    var query = "SELECT * FROM ?? WHERE ??=? AND ??=?";
    var table = ["t_user", "password", md5(post.password), "email", post.email];

    query = mysql.format(query,table);
    connection.query(query, function(error, rows){
        if(error){
            console.log(error);
        }else {
            if(rows.length == 1){
                var token = jwt.sign({rows}, config.secret, {
                    expiresIn: 1440
                });
                id_user = rows[0].id_user;

                var data = {
                    id_user: id_user,
                    access_token: token,
                    ip_address: ip.address()
                }

                var query = "INSERT INTO ?? SET ?";
                var table = ["akses_token"];

                query = mysql.format(query, table);
                connection.query(query, data , function(error, rows){
                    if(error){
                        console.log(error);
                    }else {
                        res.json({
                            success: true,
                            message: "Token JWT Tergenerate!",
                            token:token,
                            currUser: data.id_user
                        });
                    }
                });
            }else {
                res.json({"Error": true, "Message":"Email atau password salah!"});
            }
        }
    });
}
exports.halamanrahasia = function(req,res){
    response.ok("Halaman ini hanya untuk user dengan role = 2!",res);
}

//menambahkan data service
exports.tambahdataservice = function (req, res) {
    var post = {
     tgl_servis: new Date(),
     id_user: req.body.id_user,
     id_montir: req.body.id_montir,
     jumlah_sparepart: req.body.jumlah_sparepart,	
     id_sparepart: req.body.id_sparepart
     
    }
      var query = "SELECT tgl_servis FROM ?? WHERE ??=?";
    var table = ["t_service", "tgl_servis", post.tgl_service];

    query = mysql.format(query,table);

    connection.query(query, function(error,rows){
        if(error){
            console.log(error);
        }else{
            if(rows.length == 0){
                var query = "INSERT INTO ?? SET ?";
                var table = ["t_service"];
                query = mysql.format(query,table);
                connection.query(query, post, function(error, rows){
                    if(error){
                        console.log(error);
                    }else{
                        response.ok("Berhasil menambahkan data Servis baru", res);
                    }
                });
            }else{
                response.ok("Servis sudah terdaftar!",res);
            }
        }
    });
};
//controller untuk input data montir
exports.inputmontir = function(req, res) {
    var post = {
        Nama_montir: req.body.Nama_montir,
        harga_perjam: req.body.harga_perjam
    }

    var query = "SELECT nama_montir FROM ?? WHERE ??=?";
    var table = ["t_montir", "Nama_montir", post.Nama_montir];

    query = mysql.format(query,table);

    connection.query(query, function(error,rows){
        if(error){
            console.log(error);
        }else{
            if(rows.length == 0){
                var query = "INSERT INTO ?? SET ?";
                var table = ["t_montir"];
                query = mysql.format(query,table);
                connection.query(query, post, function(error, rows){
                    if(error){
                        console.log(error);
                    }else{
                        response.ok("Berhasil menambahkan data Montir baru", res);
                    }
                });
            }else{
                response.ok("Montir sudah terdaftar!",res);
            }
        }
    });
};

//controller untuk input data sparepart
exports.tambahsparepart = function(req, res) {
    var post = {
        nama_sparepart: req.body.nama_sparepart,
        harga_sparepart: req.body.harga_sparepart,
        satuan: req.body.satuan
    }

    var query = "SELECT nama_sparepart FROM ?? WHERE ??=?";
    var table = ["t_sparepart", "nama_sparepart", post.nama_sparepart];

    query = mysql.format(query,table);

    connection.query(query, function(error,rows){
        if(error){
            console.log(error);
        }else{
            if(rows.length == 0){
                var query = "INSERT INTO ?? SET ?";
                var table = ["t_sparepart"];
                query = mysql.format(query,table);
                connection.query(query, post, function(error, rows){
                    if(error){
                        console.log(error);
                    }else{
                        response.ok("Berhasil menambahkan data Sparepart baru", res);
                    }
                });
            }else{
                response.ok("Sparepart sudah terdaftar!",res);
            }
        }
    });
};

//controller untuk user
exports.tambahuser = function(req,res) {
    var post = {
        nama_user: req.body.nama_user,
        email: req.body.email,
        password: md5(req.body.password),
        level: req.body.level,
        tanggal_daftar: new Date()
    }

    var query = "SELECT nama_user FROM ?? WHERE ??=?";
    var table = ["t_user", "nama_user", post.nama_user];

    query = mysql.format(query,table);

    connection.query(query, function(error, rows) {
        if(error){
            console.log(error);
        }else {
            if(rows.length == 0){
                var query = "INSERT INTO ?? SET ?";
                var table = ["t_user"];
                query = mysql.format(query, table);
                connection.query(query, post, function(error, rows){
                    if(error){
                        console.log(error);
                    }else {
                        response.ok("Berhasil menambahkan data user baru", res);
                    }
                });
            }else {
                response.ok("user sudah terdaftar!",res);
            }
        }
    })
}

//controller untuk input data level
exports.tambahlevel = function(req, res) {
    var post = {
        nama_level: req.body.nama_level
    }

    var query = "SELECT nama_level FROM ?? WHERE ??=?";
    var table = ["t_level", "nama_level", post.nama_level];

    query = mysql.format(query,table);

    connection.query(query, function(error,rows){
        if(error){
            console.log(error);
        }else{
            if(rows.length == 0){
                var query = "INSERT INTO ?? SET ?";
                var table = ["t_level"];
                query = mysql.format(query,table);
                connection.query(query, post, function(error, rows){
                    if(error){
                        console.log(error);
                    }else{
                        response.ok("Berhasil menambahkan data level baru", res);
                    }
                });
            }else{
                response.ok("Level sudah terdaftar!",res);
            }
        }
    });
};

//mengubah data di tabel montir
exports.ubahmontir = function (req, res) {
    var id_montir = req.body.id_montir;
    var Nama_montir = req.body.nama_montir;
    var harga_perjam = req.body.harga_perjam;

    connection.query('UPDATE t_montir SET Nama_montir=?, harga_perjam=? WHERE id_montir=?', 
    [id_montir, Nama_montir, harga_perjam,],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data Montir", res)
            }
        });
};

//mengubah data di tabel Sparepart
exports.ubahsparepart = function (req, res) {
    var id_sparepart = req.body.id_sparepart;
    var nama_sparepart = req.body.nama_sparepart;
    var harga_sparepart = req.body.harga_sparepart;
    var satuan = req.body.satuan;
    
    connection.query('UPDATE t_sparepart SET nama_sparepart=?, harga_sparepart=?, satuan=? WHERE id_sparepart=?',
     [nama_sparepart, harga_sparepart, satuan, id_sparepart],
    function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Mengubah Data", res)
            }
        });
};

exports.halamanrahasia1 = function (req, res) {
    response.ok("Halaman ini hanya untuk admin dengan level = 1!", res);
}
