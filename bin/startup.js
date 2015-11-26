'use strict';

/**
 * 启动app
 * @author Architect.bian
 */

const app = require('../src/main/App');
const appSocket = require('../src/main/AppSocket');
const appRedis = require('../src/main/AppRedis');
const appDB = require('../src/main/AppDB');
app.run();
//appSocket.run();
//appRedis.run();
//appDB.run();
console.log(`Congratulation! start up successfully!`);