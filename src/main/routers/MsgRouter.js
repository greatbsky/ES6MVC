'use strict';

/**
 * 消息router
 * @author Architect.bian
 */

const log = Log(__filename);

module.exports = function(router) {

    router.redirect('/message', '/msg');

    router.get('/msg', (ctx, next) => {
        ctx.body = "msg page";
    });

    router.get('/msg/:id', (ctx, next) => {
        log.debug(ctx.params);
        ctx.body = `msg: ${ctx.params.id}`;
    });
}
