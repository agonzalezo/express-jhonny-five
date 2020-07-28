//#region vars
const
    express = require('express'),
    app     = express(),
    morgan  = require('morgan'),
    board   = require('./blink');

//#region Config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('short'));
app.use(express.static(__dirname + "/public"));
//#region Routes
app.get("/",(req,res)=>{
    res.sendFile("index.html");
    // res.status(200).json({status:"ok"})
})

app.get("/turn-on",(req,res)=>{
    board.pin.low();
    res.redirect("/");
    // res.status('200').json({led:"turn on"});
})

app.get("/turn-off",(req,res)=>{
    board.pin.high();
    res.redirect("/");
    // res.status('200').json({led:"turn off"});
})

app.post("/leds", (req,res)=>{
    console.log(req.body);
    if (req.body.turn_on){
        board.pin.low();
    }else if(req.body.turn_off){
        board.pin.high();
    }
    res.redirect("/");
})

//#region Start
app.listen(3001,()=>{
    console.log("Server on port 3001");
})