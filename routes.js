'use strict';
module.exports=function(app){
    var jsonku = require('./controller');
    app.route('/')
    .get(jsonku.index);

    app.route('/tampil')
    .get(jsonku.tampilsemuamontir);
    app.route('/tampil/:id')
    .get(jsonku.tampilberdasarkanidmontir);

    app.route('/tampilsp')
    .get(jsonku.tampilsemuasparepart);

    app.route('/tampilsp/:id')
    .get(jsonku.tampilberdasarkanidsparepart);



}