import { inherits } from 'util';
const Koa = require('koa');
const Router = require('koa-router');
import { RouterApi } from './router';

class Server {
	constructor() {
		this.app = new Koa();
		this.router = new Router();
		this.routerApi = new RouterApi();
	}

	run() {
		this.app.use(this.routerApi.routes());
		this.app.listen(3000);
	}
	private app;
	private router;
	private routerApi;
}

new Server().run();
