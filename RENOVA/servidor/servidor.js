//paquetes necesarios para el proyecto
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var controller=require('./controladores/controller');

var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


app.get ('/agrupaciones',controller.obtenerListas);
app.get ('/agrupaciones/fram',controller.obtenerListaFram);


//seteamos el puerto en el cual va a escuchar los pedidos la aplicación
var puerto = '5050';

app.listen(puerto, function () {
  console.log( "Escuchando en el puerto " + puerto );
});
