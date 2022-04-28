const path = require('path');
const server = require('koa-static');
const Koa = require('koa');
const app = new Koa();
const  router = require('./routes/router')


 app.use(server(path.join(__dirname, 'public/static')))
 app.use(router.routes());

app.listen(8000);