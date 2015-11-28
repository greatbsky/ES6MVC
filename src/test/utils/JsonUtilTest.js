var assert = require("chai").assert;
var JsonUtil = require("../../main/utils/JsonUtil");

describe('JsonUtil', function(){
    describe('#toString()', function(){
        it('should ok', function(){
            var result = '{"k":"v"}';
            var j = {k: 'v'};
            console.log(JsonUtil.toString(j));
            assert.equal(result, JsonUtil.toString(j));
        })
    });
})