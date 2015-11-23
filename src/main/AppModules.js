'use strict';

/**
 * app所用到的模块初始化
 * @author Architect.bian
 */

const Router = require('koa-router');
const fs = require('fs');
const path = require('path');

module.exports = class {

    /*
    初始化router
     */
    static initRouters (app){
        console.log(`......begin to initialize routers:`);
        const router = new Router();
        const dir = path.resolve(__dirname, './routers');
        var files = fs.readdirSync(dir).filter((file) => ((file.endsWith("Router.js"))));
        for(var file of files) {
            const fun = require(path.resolve(dir, file));
            fun(router);
            console.log(`initialized router: ${file}`);
        }
        app.use(router.routes()).use(router.allowedMethods());
    }

    /*
     初始化拦截器
     */
    static initInterceptors(app) {
        console.log(`......begin to initialize interceptor:`);
        const dir = path.resolve(__dirname, './interceptors');
        var files = fs.readdirSync(dir).filter((file) => ((file.endsWith("Interceptor.js"))));
        for(var file of files) {
            const interceptor = require(path.resolve(dir, file));
            interceptor.handle(app);
            console.log(`initialized interceptor: ${file}`);
        }
    }
}