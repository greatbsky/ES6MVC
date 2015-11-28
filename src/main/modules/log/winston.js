'use strict';

/**
 * 日志模块初始化
 * @author Architect.bian
 */

const winston = require('winston');

module.exports = class {

    constructor(logConf, options) {
        this.initializeLoggers(logConf);
        global.Log = this.Log;
        global.Log.get = winston.loggers.get;
        global.log = winston.loggers.get('default');
    }

    initializeLoggers(logConf) {
        const conf = require(logConf);
        var regCatMap = new Map();
        for (var key in conf) {
            winston.loggers.add(key, conf[key].transports);
            if (typeof(conf[key].regex) !== 'undefined') {
                regCatMap.set(key, conf[key].regex);
            }
        }
        winston.loggers.regCatMap = regCatMap;
    }

    Log(path) {
        for (var key of winston.loggers.regCatMap.keys()) {
            if (winston.loggers.regCatMap.get(key).test(path)) {
                return winston.loggers.get(key);
            }
        }
        return winston.loggers.get('default');
    }

}
