const Router = require('koa-router');
import { News } from './src/news/news';

export class RouterApi {

  constructor() {
    this.router = new Router;
    this.news = new News();
    this.init();
  }

  routes() {
    return this.router.routes();
  }

  private init() {
    this.router.get('/news', this.newsHander)
  }

  private newsHander = async (ctx, next) => {
    const newsBaiDu = await this.news.getNews();
    console.log(newsBaiDu);
  
    ctx.body = {
      status: 200,
      message: 'OK',
      body: newsBaiDu
    };
  }
  private router;
  private news;
}