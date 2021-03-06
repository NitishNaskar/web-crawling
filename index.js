const express=require("express");
const app=express();
const port=8000;

const db = require('./config/mongoose');

// set view engine
app.set("view engine","ejs");
app.set("views","./views");
app.use(express.static("./assets"));

app.use(express.urlencoded({ extended: true }));
// Routes for index
app.use('/',require("./routes/index"));

app.listen(port,function(err){
    if(err){
        console.log("Some error in this surver >> ",err);
        return;
    }
    console.log("OK ! your server is running ......");
});