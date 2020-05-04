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



