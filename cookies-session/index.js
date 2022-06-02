import cookieSession from "cookie-session";
import cookieParser from "cookie-parser";
import express from "express";
const app = express();
const port = 8000;


app.set('trust proxy', 1) // trust first proxy

app.use(cookieSession({
  name: 'Just',
  keys: ['key1', 'key2'],
  secret : 'keyboardcat',
  cookie: {maxAge:60000}
}))

app.get('/cookie', function (req, res, next) {
  // Update views
  req.session.views = (req.session.views || 0) + 1
  console.log(req.session.views);

  // Write response
  res.end(req.session.views + ' views')  
})
app.get('/destroy',function(req,res){
req.session =null;
res.send('session destroyed')
});
app.listen(port);
