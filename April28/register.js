import express from 'express';
import {dirname} from 'path';
import { fileURLToPath } from 'url';
import bodyparser from 'body-parser';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const urlEncodeParse =bodyparser.urlencoded({extended:false});
const port = 8000;

app.get('/register',function(req , res){
    res.sendFile(__dirname+ 'register.html', function(err ,data){
        res.send(data);
    })
    app.post('/postdata',urlEncodeParse,function(req,res){
        if(req)
        res.send('hello'+req.body.)
    })

})
