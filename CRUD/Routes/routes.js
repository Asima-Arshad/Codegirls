import express from 'express';
const app = express();

const port = 8000;

app.get('/',function(){
    if (req.url === '/' || req.url === '/index.js') {
        app.render('home.ejs');        
    }
});

app.get('/add',function(){
    if (req.url==='/add') {
        app.render('add.ejs');        
    }
});

app.get('/',function(){
    if (req.url === '/delete') {
        app.render('delete.ejs');        
    }
});

app.get('/',function(){
    if (req.url === '/edit') {
        app.render('edit.ejs');        
    }
});

app.listen(port , function(){
    console.log('server is running at ${port}');
})



