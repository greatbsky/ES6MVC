'use strict';

/**
 * 拦截器基类
 */

const fs = require('fs');
const path = require('path');

module.exports = class {

    constructor(rootPath, options) {
        this.root = rootPath;
        this.staticDirs = ['/js/', '/css/', '/imgs/', '/favicon.ico'];
        this.maxAge = options.maxAge == null ? 86400000 : Math.min(Math.max(0, options.maxAge), 31556926000);
    }

    handle(ctx, next) {
        if(!this.isStatic(ctx.path)) {
            return next();
        }
        if ('GET' !== ctx.method && 'HEAD' !== ctx.method) {
            ctx.status = 'OPTIONS' == ctx.method ? 200 : 405;
            ctx.set('Allow', 'GET, HEAD, OPTIONS');
            return;
        }
        var file = fs.readFileSync(path.resolve(this.root + ctx.path));
        ctx.set('Cache-Control', 'public, max-age=' + (this.maxAge / 1000 | 0));
        ctx.type = FileUtil.getExt(ctx.path);
        ctx.body = file;
    }

    /**
     * 判断是否是静态文件
     * @param path
     * @returns {boolean}
     */
    isStatic(path) {
        for (var str of this.staticDirs) {
            if (path.startsWith(str)) {
                return true;
            }
        }
        return false;
    }
}