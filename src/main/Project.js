'use strict';

/**
 * 整个项目的配置及初始设置
 * @author Architect.bian
 */

const path = require('path');
const fs = require('fs');
global.project = require('../resources/config/es6mvc');
require('./modules/log');
var log = Log(__filename);

/*自动require所有的util到global下
 global.FileUtil = require('./utils/FileUtil');*/
(function requireAllUtils() {
    log.verbose(`......begin to require All Utils:`);
    const dir = path.resolve(__dirname, './utils');
    var files = fs.readdirSync(dir).filter((file) => ((file.endsWith("Util.js"))));
    for (var file of files) {
        var fileName = file.substring(0, file.lastIndexOf(".js"));
        global[fileName] = require(path.resolve(dir, file));
        log.verbose(`require util: ${file}`);
    }
})();


/*自动require所有的enum */
(function requireAllEnum() {
    log.verbose(`......begin to require All Enums:`);
    const dir = path.resolve(__dirname, './enums');
    var files = fs.readdirSync(dir).filter((file) => ((file.startsWith("E") && file.endsWith(".js"))));
    for (var file of files) {
        var fileName = file.substring(0, file.lastIndexOf(".js"));
        global[fileName] = require(path.resolve(dir, file));
        log.verbose(`require enum: ${file}`);
    }
})();

/*自动require所有的dao */
(function requireAllDao() {
    log.verbose(`......begin to require All Dao:`);
    const dir = path.resolve(__dirname, './dao');
    var files = fs.readdirSync(dir).filter((file) => ((file.endsWith("Dao.js"))));
    for (var file of files) {
        var fileName = file.substring(0, file.lastIndexOf(".js"));
        global[fileName] = require(path.resolve(dir, file));
        log.verbose(`require dao: ${file}`);
    }
})();

