import { News } from './src/news/news';
// const routes = require('./router.ts');
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const news = new News();

router.get('/', async (ctx, next) => {
    const newsBaiDu = await news.getNews();
    ctx.body = newsBaiDu;
});

app.use(router.routes());
app.listen(3000);
