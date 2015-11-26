'use strict';

/**
 * base dao
 * @author Architect.bian
 */

const BaseSchema = require('../models/BaseSchema');

module.exports = class BaseDao  {

    /**
     * 创建一个model
     * @param m
     * @returns {*}
     */
    static model(m) {
        return mongoose.model(m.options.collection, this.newSchema(m));
    }

    /**
     * 创建schema，若dao有其他操作需重写此方法
     * schema.methods.fun = fun...;
     * @param m
     */
    static newSchema(m) {
        return new Schema(BaseSchema.wrap(m.schema), m.options);
    }
}
