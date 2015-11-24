'use strict';

/**
 * string工具类
 * @author Architect.bian
 */

module.exports = class StrUtil {

    /**
     * 返回32位的字符串
     * @returns {string}
     */
    static getUid() {
        return Math.random().toString(34).slice(2);
    }

}