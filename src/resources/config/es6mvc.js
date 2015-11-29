'use strict';

/**
 * es6mvc项目的配置文件
 * @author Architect.bian
 */

const path = require('path');

global.project = global.project || {};
global.project.root = global.project.root || path.resolve(__dirname, './../../../');
module.exports = {
    path: {
        root: global.project.roo,
        public: path.resolve(global.project.root, './public'),
        src: path.resolve(global.project.root, './src'),
        main: path.resolve(global.project.root, './src/main'),
        test: path.resolve(global.project.root, './src/test'),
        resources: path.resolve(global.project.root, './src/resources')
    }
}