'use strict';

/**
 * User so
 * @author Architect.bian
 */

//var User = require('../models/User');

module.exports = class {

    static register(user) {
        user.save();
        user.insert(user);
        //sendemail ...
        return true;
    }
}