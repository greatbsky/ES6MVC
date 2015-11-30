'use strict';

/**
 * app启动类
 * @author Architect.bian
 */

module.exports = class {

    /**
     * 初始化es6mvc相关变量
     */
    static initialize(rootPath){
        global.project = {
            root: rootPath
        };
    };

    /**
     * 初始化模块
     * @param appModules
     * @param app
     */
    static initModules(appModules, app) {
        appModules.initMongoDB();
        appModules.initStatic(app);
        appModules.initHeaders(app);
        appModules.initInterceptors(app);
        appModules.initErrors(app);
        appModules.initViews(app);
        appModules.initRouters(app);
        appModules.initError404(app);
    }

    /*
    运行程序，拦截器、controller等
     */
    static run (){
        require('./Project');
        const log = Log(__filename);

        log.verbose(`starting ............................................`);
        const Koa = require('koa');
        const app = new Koa();

        const appModules = require('./AppModules');
        this.initModules(appModules, app);

        app.listen(gconf.port, () => {
            log.info(`Congratulation! http://127.0.0.1:${gconf.port} start up successfully!`);
        });
    }
}