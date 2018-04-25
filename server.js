http = require ('http');
http createServer(function (request, responce){
	response.writeHead(200, {'Content-Type':'text/plain'})
	response.end('Hello wiorld')



}) .listen (3000);
console.log ('Server is lystening at port 3000')