'use strict';

/**
 * app启动类
 * @author Architect.bian
 */

const Koa = require('koa');
const appModules = require('./AppModules');
require('./Global');

module.exports = class {

    /*
    运行程序，拦截器、controller等
     */
    static run (){
        console.log(`starting ............................................`);
        const app = new Koa();

        appModules.initInterceptors(app);
        appModules.initRouters(app);

        app.listen(gconf.port, () => {
            console.log(`finished starting ......................................`);
        });
    }
}