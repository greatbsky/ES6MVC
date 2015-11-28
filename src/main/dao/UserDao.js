'use strict';

/**
 * User dao
 * @author Architect.bian
 */

const log = Log(__filename);

module.exports = class UserDao extends BaseDao {

    static newSchema(m) {
        var schema = super.newSchema(m);
        schema.methods.insert = this.insert;
        return schema;
    }

    static insert(arg){
        log.debug(`UserDao.insert: ${JsonUtil.toString(arg)}`);
    }
}