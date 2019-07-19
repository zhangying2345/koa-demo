const Koa = require('koa');
import { RouterApi } from './router';

class Server {
	constructor() {
		this.app = new Koa();
		this.routerApi = new RouterApi();
	}

	run() {
		this.app.use(this.routerApi.routes());
		this.app.listen(3000);
	}
	private app;
	private routerApi;
}

new Server().run();
