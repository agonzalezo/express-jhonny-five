var five = require("johnny-five");
var firmata = require("firmata");
var EtherPortClient = require('etherport-client').EtherPortClient;
var io = new firmata.Board(new EtherPortClient({
    host: '192.168.1.9',
    port: 3030
}));

io.once('ready', function(){
    console.log('IO Ready');
    io.isReady = true;

    var board = new five.Board({io: io, repl: true});

    board.on('ready', function(){
        console.log('five ready');

        var led = new five.Led(2);
        led.blink();
    });
});