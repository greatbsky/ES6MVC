'use strict';

/**
 * 日志拦截器
 */

const BaseInterceptorHandler = require("./BaseInterceptorHandler");

module.exports = class WebInterceptor extends BaseInterceptorHandler {

    static before(ctx) {
        //console.log(`before invoke router`);
    }

    static after(ctx) {
        //console.log(`after invoke router`);
    }
}