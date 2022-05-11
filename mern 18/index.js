import express from 'express';
import path from 'path';

const app = express();
const port = 8980;
console.log("server running");

app.use(express.static("public"));
app.use("/static", express.static("public"));
app.set("view engine" , "ejs");

app.get('/', function(req , res){
    console.log("log in page");
    res.render("home/home");
});

app.listen(port);