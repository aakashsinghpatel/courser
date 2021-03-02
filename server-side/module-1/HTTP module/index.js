// server using http module 

const http = require('http');

const path = require('path');

const fs = require('fs');

const hostName = 'localhost';
const port = 3000;

/* 1
const server = http.createServer((req, res) => {
    console.log('request header', req);
    
    res.statusCode = 301;
    res.setHeader('content-type', 'text/html');
    // for  end of request
    res.end('<html><body> <h1> Hello, DATA </h1> </body> </html>');
    // end of request
    
});

*/

const server = http.createServer((req, res) => {
    console.log('Request for', req.url, 'by method', req.method);
    var fileUrl;
    
    
    if(req.method == 'GET') {
        
        if(req.url == '/' || req.url == '') fileUrl = 'index.html';
        else fileUrl =  req.url;
        
        var filePath =  path.resolve('./public/'+fileUrl);
        const fileExt =  path.extname(filePath);
        console.log(filePath);
        if(fileExt == '.html') {
            fs.exists(filePath, (exist) => {
                if(!exist) {
                     res.statusCode = 404;
                    res.setHeader('content-type', 'text/html');
          res.end('<html><body> <h1> 404 error: this file does not exist </h1> </body> </html>')
                    }  else {
                        
                        res.statusCode = 200;
                    res.setHeader('content-type', 'text/html');
                        fs.createReadStream(filePath).pipe(res);
                    }
            })
            
        } else {
             res.statusCode = 404;
            res.setHeader('content-type', 'text/html');
          res.end('<html><body> <h1> 404 error: this file type not suppoeted </h1> </body> </html>')
        }
        
        
    } else {
        res.statusCode = 404;
        res.setHeader('content-type', 'text/html');
        res.end('<html><body> <h1> 404 error: this methos  is not suppoeted </h1> </body> </html>')
    }
});

server.listen(port, hostName, () => {
    
    console.log(`server listening at http://${hostName}:${port}`);
})