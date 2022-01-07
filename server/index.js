const jsonServer = require('json-server');
const db = require('./db');

const server = jsonServer.create();

const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use((req, res, next) => {
  setTimeout(next, 2000);
});

server.use(middlewares);
server.use(router);
server.listen(3007, () => {
  // eslint-disable-next-line no-console
  console.log('JSON Server is running');
});
