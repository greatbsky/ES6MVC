'use strict';

/**
 * favicon
 */

const log = Log(__filename);
const fs = require('fs');

module.exports = class favicon {

    constructor(path, options) {
        this.path = path;
        this.maxAge = options.maxAge == null ? 86400000 : Math.min(Math.max(0, options.maxAge), 31556926000);
    }

    handle(ctx, next) {
        if ('/favicon.ico' != ctx.path) {
            return next();
        }
        if ('GET' !== ctx.method && 'HEAD' !== ctx.method) {
            ctx.status = 'OPTIONS' == ctx.method ? 200 : 405;
            ctx.set('Allow', 'GET, HEAD, OPTIONS');
            return;
        }
        var icon = fs.readFileSync(this.path);// todo 异步？
        //ctx.set('Cache-Control', 'public, max-age=' + (this.maxAge / 1000 | 0));
        ctx.type = 'image/x-icon';
        ctx.body = icon;
    }
}