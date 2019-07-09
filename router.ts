const Router = require('koa-router');
const router = new Router();

const cheerio = require('cheerio');

router.get('/', (ctx, next) => {
  ctx.body = 'hellow'
})
let routes = router.routes();
exports.routes;