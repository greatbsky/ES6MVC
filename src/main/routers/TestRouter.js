'use strict';

/**
 * 首页router
 * @author Architect.bian
 */

const log = Log(__filename);

module.exports = function(router) {

    router.get('/test', (ctx, next) => {
        ctx.body = "test pag";
    });

    router.get('/test/err', (ctx, next) => {
        throw new Error("this is a error");
        ctx.body = "test page eeee";
    });

    router.get('/test/cookie', (ctx, next) => {
        var count = ctx.cookies.get('count');
        log.debug(count);
        var n = Number.parseInt(count) + 1;
        ctx.cookies.set('count', n);
    });

    router.get('/test/session', (ctx, next) => {
        //todo
    });

    router.get('/test/hbs', (ctx, next) => {
        ctx.model = { "name": "Alan", "hometown": "Somewhere, TX",
            "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
        return 'hbs';
    });

    router.get('/test/json', (ctx, next) => {
        var j = { "name": "Alan", "hometown": "Somewhere, TX",
            "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
        return j;
    });

    router.get('/test/log', (ctx, next) => {
        var j = { "name": "Alan", "hometown": "Somewhere, TX",
            "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
        log.info(j);
        return j;
    });

    router.get('/test/log2', (ctx, next) => {
        var log = Log(__filename);
        var j = { "name": "Alan", "hometown": "Somewhere, TX",
            "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
        log.info('hi', {k:123, k1:111},{k:123, k2:222} , {k:456}, j);
        return j;
    });

    router.get('/test/email', (ctx, next) => {
        ctx.body = EmailUtil.send();
    });
}
