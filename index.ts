const Koa = require('koa');
const process = require('process');
import { Chokidr } from './chokidar';
import { RouterApi } from './router';

class Server {
	constructor() {
		this.app = new Koa();
		this.routerApi = new RouterApi();
		new Chokidr();
	}

	run() {
		this.app.use(this.routerApi.routes());
		this.app.listen(3000, () => {
			console.log(`Server pid: ${process.pid}, listen on port 3000`);
		});
	}

	private app;
	private routerApi;
}

new Server().run();
