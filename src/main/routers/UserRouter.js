'use strict';

/**
 * 会员router
 * @author Architect.bian
 */

var User = require('../models/User');
var UserSO = require('../service/UserSO');

module.exports = function(router) {

    router.get('/user', (ctx, next) => {
        ctx.body = "user pag";
    });

    /**
     * /user/register?name=hi
     */
    router.get('/user/register', (ctx, next) => {
        var user = new User({
            name : ctx.query.name
        });
        //var user = new User();
        //user.name = ctx.query.name;
        //console.log(`ctx.query : ${JsonUtil.toString(ctx.query)}`);
        //console.log(`ctx.query.name : ${ctx.query.name}`);
        if(UserSO.register(user)) {
            ctx.model.user = user;
            return "user";
        }
        return "500";
    });

}
