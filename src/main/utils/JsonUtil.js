'use strict';

/**
 * file工具类
 * @author Architect.bian
 */

module.exports = class JsonUtil {

    /**
     * 返回Json字符串
     * @returns {string}
     */
    static toString(value) {
        return JSON.stringify(value);
    }

    /**
     * 返回String对象
     * @returns {string}
     */
    static parse(str) {
        return JSON.parse(str);
    }

}