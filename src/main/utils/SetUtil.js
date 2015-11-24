'use strict';

/**
 * file工具类
 * @author Architect.bian
 */

module.exports = class SetUtil {

    /**
     * 合并set，将from合并到to中
     * @param to
     * @param from
     * @returns {*}
     */
    static merge(to, from) {
        for(var item of from.values()) {
            to.add(item);
        }
        return to;
    }

    /**
     * 返回set中的一个任一值
     * @param set
     * @returns {*}
     */
    static getOne(set) {
        return set.values().next().value;
    }

}