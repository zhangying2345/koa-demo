const chokidar = require('chokidar');
const cmd = require('node-cmd');
export class Chokidr {

  constructor() {
    this.init();
  }

  init() {
    chokidar.watch('./src', {

      persistent: true,

      ignored: /(^|[\/\\])\../, // 忽略点文件

      cwd: '.', // 表示当前目录

      depth: 9 // 只监听当前目录不包括子目录

    }).on('change', (event, path) => {//监听除了ready, raw, and error之外所有的事件类型

      console.log(event, path);
      // process['kill'](process['pid'], 'SIGHUP');
      process['exit'](0);
      cmd.run('npm start')
    });
  }
}
