'use strict'
var response = require('./res');
var connection = require('./koneksi');
exports.index=function(req,res){
    response.ok("Berjalan",res)
};

exports.tampilsemuamontir = function (req, res) {
    connection.query('SELECT * FROM T_montir', function (error, rows, fields) {
        if (error) {
            connection.log(error);
        } else
            response.ok(rows, res)
    });

};

exports.tampilsemuasparetpart = function (req, res) {
    connection.query('SELECT * FROM t_sparepart', function (error, rows, fields) {
        if (error) {
            connection.log(error);
        } else
            response.ok(rows, res)
    });

};

exports.tampilberdasarkanidmontir = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM montir WHERE id_montir = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);

            }

        });

}

exports.tampilberdasarkanidsparepart = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM t_sparepart WHERE id_sparepart = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);

            }

        });

}
