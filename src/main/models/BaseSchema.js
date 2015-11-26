'use strict';

/**
 * base schema基础的schema
 * @author Architect.bian
 */

module.exports = class {

    /**
     * 在BaseDao中调用，初始schema默认的字段
     * @param schema
     */
    static wrap(schema) {
        schema.status = { type: String, default: EStatus.enable };
        schema.createtime = { type: Date, default: Date.now };
        schema.updatetime = { type: Date, default: Date.now };
        return schema;
    }
}