'use strict';

/**
 * User model
 * @author Architect.bian
 */

module.exports = UserDao.model({
    options: {
        collection: 'user' //必须有，表名
    },
    schema: {
        name: String
    }
});