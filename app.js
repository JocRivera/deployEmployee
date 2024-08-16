const Server = require('./model/server');
const server = new Server();
server.middlewares();
server.routes();

