'use strict';

/**
 * 日志配置文件
 * @author Architect.bian
 */

const defaultDateHandler = function () {
    var fillZero = function (n, len) {
        while (`${n}`.length < len) {
            n = `0${n}`;
        }
        return n;
    };
    var date = new Date();
    var y = date.getFullYear();
    var m = fillZero(date.getMonth(), 2);
    var d = fillZero(date.getDate(), 2);
    var h = fillZero(date.getHours(), 2);
    var min = fillZero(date.getMinutes(), 2);
    var s = fillZero(date.getSeconds(), 2);
    var ms = fillZero(date.getMilliseconds(), 3);
    return `${y}-${m}-${d} ${h}:${min}:${s},${ms}`;
};
const defaultFormatterHandler = function (opts) {
    return opts.timestamp() + ' ' + opts.level.toUpperCase() + ' ' + opts.label.toUpperCase() + '- ' +
        (undefined !== opts.message ? opts.message : '') + ' ' +
        (opts.meta && Object.keys(opts.meta).length ? JSON.stringify(opts.meta) : '' );
};

const defaultConsoleTransportHandler = function(level, label) {
    return {
        level: level,
        colorize: true,
        label: label,
        timestamp: defaultDateHandler
    };
};

const defaultFileTransportHandler = function(level, file, label) {
    return {
        filename: file,
        level: level,
        label: label,
        json: false,
        timestamp: defaultDateHandler,
        formatter: defaultFormatterHandler,
        maxsize: 10000000,
        maxFiles: 2
    };
};

/**
 * Logging Levels: { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }
 * 正则不要冲突，否则日志会写到多个transport中
 */
module.exports = {
    'default': {
        transports: {
            console: {
                level: 'info',
                colorize: true,
                label: 'default',
                timestamp: defaultDateHandler
            }
        }
    },
    'util': {
        regex: new RegExp(/.*Util.js$/),
        transports: {
            console: defaultConsoleTransportHandler('debug', 'util'),
            file: defaultFileTransportHandler('debug', 'logs/util.log', 'util')
        }
    },
    'interceptor': {
        regex: new RegExp(/.*Interceptor.js$/),
        transports: {
            console: defaultConsoleTransportHandler('info', 'interceptor'),
            file: defaultFileTransportHandler('info', 'logs/interceptor.log', 'interceptor')
        }
    },
    'router': {
        regex: new RegExp(/.*Router.js$/),
        transports: {
            console: defaultConsoleTransportHandler('info', 'router'),
            file: defaultFileTransportHandler('info', 'logs/router.log', 'router')
        }
    },
    'service': {
        regex: new RegExp(/.*SO.js$/),
        transports: {
            console: defaultConsoleTransportHandler('info', 'service'),
            file: defaultFileTransportHandler('info', 'logs/service.log', 'service')
        }
    },
    'dao': {
        regex: new RegExp(/.*Dao.js$/),
        transports: {
            console: defaultConsoleTransportHandler('info', 'dao'),
            file: defaultFileTransportHandler('info', 'logs/dao.log', 'dao')
        }
    }
}