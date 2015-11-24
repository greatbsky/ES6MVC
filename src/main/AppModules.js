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
        this.requireRouterJs(router, dir);
        app.use(router.routes()).use(router.allowedMethods());
    }

    /**
     * require dirName下所有*Router.js文件，包括子目录
     * @param router
     * @param dir 文件夹完整的路径
     */
    static requireRouterJs(router, dir) {
        var files = fs.readdirSync(dir);
        for(var file of files) {
            const filePath = path.resolve(dir, file);
            const stats = fs.statSync(filePath);
            if(stats.isDirectory()) {
                this.requireRouterJs(router, filePath); //子目录
            } else if(stats.isFile() && file.endsWith("Router.js")) {
                const fun = require(filePath);
                fun(router);
                console.log(`initialized router: ${file}`);
            }
        }
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