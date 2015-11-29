'use strict';

/**
 * i18n工具类，还未测试过~~~先把思路记录下来
 * @author Architect.bian
 */

const path = require('path');

module.exports = class I18NUtil {

    /**
     * 返回Json字符串
     * @returns {string}
     */
    static getLocale(req) {
        return req.getHeader('Accept-Language').split(',')[0];//zh-CN,zh;q=0.8,en;q=0.6
    }

    /**
     * 返回String对象
     * @returns {string}
     */
    static getEnum(locale, k) {
        var json = require(path.resolve(project.path.resources, `./i18n/enum.${locale}`));//enum.zh-CN.json
        if(typeof(json) == 'undefined') {
            json = require(path.resolve(project.path.resources, `./i18n/enum`));
        }
        return json[k];
    }

}