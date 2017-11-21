'use strict';

/**
 * number工具类
 * @author Architect.bian
 */

var log = Log(__filename);

module.exports = class NumUtil {

    static isNum(n) {
        return !isNaN(n);;
    }

}
