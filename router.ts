import { myContainer } from './ioc/inversify.config';
import { TYPES } from "./ioc/types";
import { NewsInterface } from "./ioc/interface";

const Router = require('koa-router');
// import { News } from './src/news/news';

export class RouterApi {

  constructor() {
    this.router = new Router;
    // this.news = new News();
    this.news = myContainer.get<NewsInterface>(TYPES.NewsInterface);
    this.init();
  }

  routes() {
    return this.router.routes();
  }

  private init() {
    this.router.get('/news', this.newsHander);
    this.router.get('/breakingNews', this.breakingNewsHander);
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

  private breakingNewsHander = async (ctx, next) => {
    const breakingNews = await this.news.breakingNews();
    console.log(breakingNews);

    ctx.body = {
      status: 200,
      message: 'OK',
      body: breakingNews
    };
  }
  private router;
  private news;
}
