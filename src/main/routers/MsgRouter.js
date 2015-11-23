'use strict';

/**
 * 消息router
 * @author Architect.bian
 */

module.exports = function(router) {

    router.redirect('/message', '/msg');

    /*
    消息页面
     */
    router.get('/msg', (ctx, next) => {
        ctx.body = "msg page";
    });

    router.get('/msg/:id', (ctx, next) => {
        console.log(ctx.params);
        ctx.body = `msg: ${ctx.params.id}`;
    });
}
