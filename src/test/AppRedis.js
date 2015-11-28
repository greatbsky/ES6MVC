'use strict';

/**
 * app redis启动类
 * @author Architect.bian
 */

const redis = require("redis");

module.exports = class {

    /*
    运行redis
     */
    static run (){
        console.log(`app socket starting ............................................`);

        const client = redis.createClient(gconf.cache.redis.url, gconf.cache.redis.options);


        client.on("connect", function () {});
        client.on("ready", function () {});
        client.on("error", function (err) {
            console.log("Error " + err);
        });
        client.on("end", function () {});

        client.select(3, function() {});

        client.set("string key", "string val", redis.print);
        client.hset("hash key", "hashtest 1", "some value", redis.print);
        client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
        client.hkeys("hash key", function (err, replies) {
            console.log(replies.length + " replies:");
            replies.forEach(function (reply, i) {
                console.log("    " + i + ": " + reply);
            });
            client.quit();
        });

        var client1 = redis.createClient(gconf.cache.redis.url, gconf.cache.redis.options), client2 = redis.createClient(gconf.cache.redis.url, gconf.cache.redis.options), msg_count = 0;
        client1.on("subscribe", function (channel, count) {
            console.log(`channel: ${channel} count: ${count}`);

            client2.publish("mychannel", "I am sending a message.");
            client2.publish("mychannel", "I am sending a second message.");
            client2.publish("mychannel", "I am sending my last message.");
        });

        client1.on("message", function (channel, message) {
            console.log("client1 channel " + channel + ": " + message);
            msg_count += 1;
            //if (msg_count === 3) {
            //    client1.unsubscribe();
            //    client1.end();
            //    client2.end();
            //}
        });

        client1.subscribe("mychannel");


        console.log(`app socket finished starting ......................................`);
    }
}
