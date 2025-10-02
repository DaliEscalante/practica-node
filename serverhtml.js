// serverhtml.js
var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
  response.write(`
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>Servidor Node.js</title>
        <style>
          body { font-family: Arial, sans-serif; background-color: #f3f3f3; color: #333; text-align: center; padding-top: 50px; }
          h1 { color: purple; }
        </style>
      </head>
      <body>
        <h1>¡Hola Mundo desde Node.js!</h1>
        <p>Este es un ejemplo de servidor HTTP que responde con HTML.</p>
      </body>
    </html>
  `);
  response.end();
}).listen(8888);

console.log("Servidor HTML en http://localhost:8888");
