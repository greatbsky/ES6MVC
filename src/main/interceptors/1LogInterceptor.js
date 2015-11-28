'use strict';

/**
 * 日志拦截器
 */

const log = Log(__filename);
const BaseInterceptorHandler = require("./BaseInterceptorHandler");

module.exports = class LogInterceptor extends BaseInterceptorHandler {

    static handle(app) {
        app.use((ctx, next) => {
            //console.log(`LogInterceptor begin ...`);
            const start = new Date;
            return next().then(() => {
                const ms = new Date - start;
                log.debug(`${ctx.method} ${ctx.url} - ${ms}ms`);
            });
        });
    }
}