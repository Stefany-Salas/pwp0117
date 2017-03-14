// Cargar el modulo http
var http = require('http');
// Cargar el modulo fs
var fs = require('fs');
// Cargar el modulo PATH
var path = require('path');
// Cargando colors
var colors = require('colors');

// -- Cargando configuraciones
var config = require("./config/config");

// Establecer el tema de colors
colors.setTheme(config.color_theme);

// Crear el server
var server = http.createServer(function(req, res){
    // Logeando la peticion
    console.log(`> Peticion entrante: ${req.url}`);
    // Variable que almacenara la ruta absoluta
    // del archivo a ser servido
    var resourcePath;
    if(req.url == "/"){
        // El cliente no especifica
        // recurso
        resourcePath = './static/index.html';
    }else{
        // El cliente si especifica
        // recurso
        resourcePath = config.STATIC_PATH + req.url;
    }

    // Extrayendo la extension de la url
    var extName = path.extname(resourcePath);

    // Crear la variable content-type
    var contentType;

    // Asignando un contentType dependiendo
    // de la extension de la url solicitada
    switch(extName){
        case ".js":
            contentType = 'text/javascript'
            break;
        case ".css":
            contentType = 'text/css'
            break;
        case "html":
            contentType = 'text/html'
            break;
        default:
            contentType = 'text/plain'
            break;
    }
    // Todo: verificar la existencia del recurso
});
