'use strict';

/**
 * 全局配置文件
 * @author Architect.bian
 */

module.exports = {
    port: 9000,
    view: {
        model:{
            base: "http://finance.supergenius.cn",
            basejs: "http://sv2f.supergenius.cn",
            basecss: "",
            baseimg: "",
            basefile: "",
            webdata: ""
        }
    },
    web: {
        staticRegexs : [/^\/js\/.*/i, /^\/css\/.*/i, /^\/imgs\/.*/i, /.*\.ico$/i, /.*\.html$/i]
    },
    sys: {

    },
    db: {
        mysql: {},
        mongodb: {
            url: "mongodb://127.0.0.1/test",//mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]
            options: {}
        }
    },
    cache: {
        redis: {
            url: "redis://192.168.1.98:6379",
            options: {}
        }
    },
    socket: {
        port: 3000
    }
}