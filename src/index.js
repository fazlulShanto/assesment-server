const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('src/db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5678;

server.use(middlewares);
server.use('/api',router);
server.listen(port, () => console.log(`running on port:${port}`));
