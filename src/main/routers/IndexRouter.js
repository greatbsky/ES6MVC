'use strict';

/**
 * 首页router
 * @author Architect.bian
 */

module.exports = function(router) {

    /*
    首页
     */
    router.get('/', (ctx, next) => {
        ctx.body = "hi, I am in router";
    });

    router.get('/test', (ctx, next) => {
        ctx.body = "test page";
    });
}
