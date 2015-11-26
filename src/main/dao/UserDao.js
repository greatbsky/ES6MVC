'use strict';

/**
 * User dao
 * @author Architect.bian
 */

module.exports = class UserDao extends BaseDao {

    static newSchema(m) {
        var schema = super.newSchema(m);
        schema.methods.insert = this.insert;
        return schema;
    }

    static insert(arg){
        console.log(`UserDao.insert: ${JsonUtil.toString(arg)}`);
    }
}