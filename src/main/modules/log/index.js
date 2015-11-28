'use strict';

/**
 * 日志模块初始化
 * @author Architect.bian
 */

const path = require('path');

new (require('./winston'))(path.resolve(project.path.resources, './config/log'));//采用winston日志
