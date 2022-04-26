import http, { Server } from 'http';
import fs from 'fs';

http.createServer(function (req , res) {
    if (req.url === '/about'){
        fs.readFile('about.html', 'utf8', (err, data) => {
            if (err) {
                console.error(err)
                return
            }
            res.end(data);
        })
    }
}) .listen(8081);
