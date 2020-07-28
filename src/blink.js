const five = require("johnny-five");
const { EtherPortClient } = require("etherport-client");
const board = new five.Board({
  port: new EtherPortClient({host: "192.168.1.9", port: 3030,}), repl: false,
});
const LED_PIN = 2;
board.on("ready", () => {
  console.log("Board Ready")
  board.pinMode(LED_PIN, five.Pin.OUTPUT);
  // the Led class was acting hinky, so just using Pin here
  board.pin = five.Pin(LED_PIN);
  const pin = five.Pin(LED_PIN);
  let value = 0;
  // setInterval(() => {
  //   if (value) {
  //     pin.high();
  //     value = 0;
  //     console.log("Encendido.");
  //   } else {
  //     pin.low();
  //     value = 1;
  //     console.log("Apagado.");
  //   }
  // }, 200);
});

module.exports = board;
// board.on("ready", function() {
//   var led = new five.Led(2);
//   led.blink(500);
//   console.log("Brincando")
// });