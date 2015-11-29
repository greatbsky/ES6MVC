'use strict';

/**
 * 整个项目的配置及初始设置
 * @author Architect.bian
 */

const path = require('path');
const fs = require('fs');
global.project = require('./../resources/config/es6mvc');
require('./modules/log');
var log = Log(__filename);

/*自动require所有的util到global下
 global.FileUtil = require('./utils/FileUtil');*/
function requireAllUtils(dir) {
    log.verbose(`......begin to require All Utils:`);
    var files = fs.readdirSync(dir).filter((file) => ((file.endsWith("Util.js"))));
    for (var file of files) {
        var fileName = file.substring(0, file.lastIndexOf(".js"));
        global[fileName] = require(path.resolve(dir, file));
        log.verbose(`require util: ${file}`);
    }
}
requireAllUtils(path.resolve(__dirname, './utils'));
requireAllUtils(path.resolve(project.path.main, './utils'));


/*自动require所有的enum */
function requireAllEnum(dir) {
    log.verbose(`......begin to require All Enums:`);
    var files = fs.readdirSync(dir).filter((file) => ((file.startsWith("E") && file.endsWith(".js"))));
    for (var file of files) {
        var fileName = file.substring(0, file.lastIndexOf(".js"));
        global[fileName] = require(path.resolve(dir, file));
        log.verbose(`require enum: ${file}`);
    }
};
requireAllEnum(path.resolve(__dirname, './enums'));
requireAllEnum(path.resolve(project.path.main, './enums'));


/*自动require interceptors */
function requireAllInterceptor(dir) {
    log.verbose(`......begin to require Interceptor:`);
    global['BaseInterceptorHandler'] = require(path.resolve(dir, 'BaseInterceptorHandler'));
    log.verbose(`require interceptor: BaseInterceptorHandler`);
};
requireAllInterceptor(path.resolve(__dirname, './interceptors'));


/*自动require models */
function requireAllModels(dir) {
    log.verbose(`......begin to require models:`);
    global['BaseSchema'] = require(path.resolve(dir, 'BaseSchema'));
    log.verbose(`require model: BaseSchema`);
};
requireAllModels(path.resolve(__dirname, './models'));


/*自动require所有的dao */
function requireAllDao(dir) {
    log.verbose(`......begin to require All Dao:`);
    var files = fs.readdirSync(dir).filter((file) => ((file.endsWith("Dao.js"))));
    for (var file of files) {
        var fileName = file.substring(0, file.lastIndexOf(".js"));
        global[fileName] = require(path.resolve(dir, file));
        log.verbose(`require dao: ${file}`);
    }
};
requireAllDao(path.resolve(project.path.main, './dao'));