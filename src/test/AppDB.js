'use strict';

/**
 * app db启动类
 * @author Architect.bian
 */

const mongoose = require('mongoose');

module.exports = class {

    /*
    运行db
     */
    static run (){
        console.log(`app db starting ............................................`);

        this.runMongo();

        console.log(`app db finished starting ......................................`);
    }

    static runMongo() {
        mongoose.connect('mongodb://localhost/test');
        const db = mongoose.connection;
        db.on('error', function(err){
            console.log(`err: ${err}`);
        });
        db.once('open', function () {
            console.log(`open`);
        });

        var kittySchema = mongoose.Schema({
            name: String
        });
        kittySchema.methods.speak = function () {
            var greeting = this.name
                ? "Meow name is " + this.name
                : "I don't have a name";
            console.log(greeting);
        };

        var Kitten = mongoose.model('Kitten', kittySchema);
        var silence = new Kitten({ name: 'Silence' });
        console.log(silence.name);
        var fluffy = new Kitten({ name: 'fluffy' });
        fluffy.speak();
        fluffy.save(function (err, fluffy) {
            if (err) return console.error(err);
        });
        Kitten.find({ name: /^fluff/ }, function (err, kittens) {
            if (err) return console.error(err);
            console.log(kittens);
        })
    }
}
