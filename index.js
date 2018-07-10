
'use strict'
var mongoose = require('mongoose');
var port = 3000;
var app = require('./app');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mlarios10:ElectroCompu-10@ds131971.mlab.com:31971/backend-2018')
    .then(()=> {     
        console.log('La conexion a mongo a sido exitosa');
        app.listen(port, ()=> {
            console.log('El servidor local de node y express esta corriendo');
    });
})
.catch( err => console.log(err));