'use strict';

/**
 * 首页router
 * @author Architect.bian
 */

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
        console.log(count);
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
}
