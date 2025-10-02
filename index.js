// index.js
var server = require("./server");
var router = require("./router");
var requestHandler = require("./requestHandler");

var handle = {};
handle["/"] = requestHandler.iniciar;
handle["/inicio"] = requestHandler.iniciar;
handle["/subir"] = requestHandler.subir;

server.iniciar(router.route, handle);
