'use strict';

/**
 * appsocket启动类
 * @author Architect.bian
 */

const SocketIO = require('socket.io');

module.exports = class {

    /*
    运行socket
     */
    static run (){
        console.log(`app socket starting ............................................`);

        const io = new SocketIO();


        var chatIO = io.of("/chat").on('connection', function(socket){
            console.log('a user connected');
            socket.on('disconnect', function(){
                console.log('user disconnected');
            });
            socket.on('chat message', function(msg, fn){
                //socket.emit('chat message', msg);
                //socket.broadcast.emit('chat message', msg);
                //chatIO.emit('chat message', msg);
                //console.log(fn);
                //console.log(fn.toString());
                chatIO.to('myroom').emit('chat message', msg);
                fn('ok');
            });
        });
        io.use(function(socket, next){
            console.log(socket.request.headers.cookie);
            return next();
            //next(new Error('Authentication error'));
        });
        io.listen(gconf.socket.port);

        console.log(`app socket finished starting ......................................`);
    }
}
