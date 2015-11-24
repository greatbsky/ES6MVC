'use strict';

/**
 * 全局变量的设置，比如设置global.gconf、global.$等
 * @author Architect.bian
 */

const path = require('path');
const fs = require('fs');

global.gconf = require('../resources/config/config');
//global.$ = getLodash();

/*自动require所有的util到global下
 global.FileUtil = require('./utils/FileUtil');*/
(function requireAllUtils() {
    console.log(`......begin to require All Utils:`);
    const dir = path.resolve(__dirname, './utils');
    var files = fs.readdirSync(dir).filter((file) => ((file.endsWith("Util.js"))));
    for (var file of files) {
        var fileName = file.substring(0, file.lastIndexOf(".js"));
        global[fileName] = require(path.resolve(dir, file));
        console.log(`require util: ${file}`);
    }
})();



