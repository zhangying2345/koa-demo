const routes = require('./router.ts');
const Koa = require('koa');

const app = new Koa();
app.use(routes.routes());
app.listen(3000);