'use strict';

/**
 * 错误页router
 * @author Architect.bian
 */

module.exports = function(router) {

    /*
     404页
     */
    router.get('/err/404', (ctx, next) => {
        ctx.body = "<h1>404</h1>";
    });

    /*
     500页
     */
    router.get('/err/500', (ctx, next) => {
        ctx.body = "<h1>500</h1>h1>";
    });

}
