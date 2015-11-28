'use strict';

/**
 * app启动类
 * @author Architect.bian
 */

require('./Project');
require('./Global');
const Koa = require('koa');
const appModules = require('./AppModules');
const log = Log(__filename);

module.exports = class {

    /*
    运行程序，拦截器、controller等
     */
    static run (){
        log.verbose(`starting ............................................`);
        const app = new Koa();

        appModules.initMongoDB();
        appModules.initStatic(app);
        appModules.initHeaders(app);
        appModules.initInterceptors(app);
        appModules.initErrors(app);
        appModules.initViews(app);
        appModules.initRouters(app);
        appModules.initError404(app);

        app.listen(gconf.port, () => {
            log.info(`Congratulation! http://127.0.0.1:${gconf.port} start up successfully!`);
        });
    }
}