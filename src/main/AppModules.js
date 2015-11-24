'use strict';

/**
 * app所用到的模块初始化
 * @author Architect.bian
 */

const Router = require('koa-router');
const fs = require('fs');
const path = require('path');
const hbs = require('handlebars');
const StaticServe = new require('./modules/staticServe');

module.exports = class {

    /*
     初始化静态文件
     */
    static initStatic(app) {
        const serve = new StaticServe(path.resolve(__dirname, '../../', './public/'), {});
        app.use((ctx, next) => {serve.handle(ctx, next)});
    }

    /*
     初始化header
     */
    static initHeaders(app) {
        app.use(function (ctx, next) {
            return next().then(
                ctx.type = "Content-Type", "text/html; charset=utf-8"
            );
        });
    }

    /*
     初始化router
     */
    static initRouters(app) {
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
        for (var file of files) {
            const filePath = path.resolve(dir, file);
            const stats = fs.statSync(filePath);
            if (stats.isDirectory()) {
                this.requireRouterJs(router, filePath); //子目录
            } else if (stats.isFile() && file.endsWith("Router.js")) {
                const fun = require(filePath);
                fun(router);
                console.log(`initialized router: ${file}`);
            }
        }
    }

    /**
     * 初始化拦截器
     * @param app
     */
    static initInterceptors(app) {
        console.log(`......begin to initialize interceptor:`);
        const dir = path.resolve(__dirname, './interceptors');
        var files = fs.readdirSync(dir).filter((file) => ((file.endsWith("Interceptor.js"))));
        for (var file of files) {
            const interceptor = require(path.resolve(dir, file));
            interceptor.handle(app);
            console.log(`initialized interceptor: ${file}`);
        }
    }

    /**
     * 初始化500错误页
     * @param app
     */
    static initErrors(app) {
        app.use(function (ctx, next) {
            next().catch((err) => {
                ctx.status = 500;
                ctx.body = '500 ^_^ <br />';
                ctx.body += err;
                    //ctx.redirect("/err/500");
                console.error(`${err}`);
            });
        });
    }
    /**
     * 自动跳转到404页面,必需是最后一个module
     * @param app
     */
    static initError404(app) {
        app.use(function (ctx, next) {
            ctx.status = 404;
            ctx.redirect("/err/404");
        });
    }

    /**
     * 初始化Views
     * @param app
     */
    static initViews(app) {
        app.use(function (ctx, next) {
            ctx.model = {};
            next().then((result) => {
                if(typeof(result) == "string" && result.length > 0) {
                    var dir = path.resolve(__dirname, './views');
                    var files = FileUtil.searchFiles(dir, function(f){return f == `${result}.html`}, true);
                    var tmplPath = SetUtil.getOne(files);
                    var tmplContent = fs.readFileSync(tmplPath, { flags: 'r', encoding: "utf-8"});
                    var template = hbs.compile(tmplContent);
                    ctx.body = template(ctx.model);
                }
            });
        });
    }

}
