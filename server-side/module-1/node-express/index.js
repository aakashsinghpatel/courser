// server using http with express

var http = require('http');
const  express = require('express');
const morgan =  require('morgan');
const bodyParser = require('body-parser');

const hostName = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname+ '/public'));


const dishRouter =  require('./routes/dishRouter');
/* === code withput express router
// request with dishes 
app.all('/dishes', (req,res,next) => {
    // any changes done here with req or res will send update  one to next matchin one request
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    console.log('this is' + req.body);
    next();
});

app.get('/dishes', (req, res, next) => {
  res.end('will send you details of all dishes');
});

app.post('/dishes', (req, res, next) => {
  res.end('will add dish'+ req.body.name + 'with details'
          + req.body.description);
});

app.put('/dishes', (req, res, next) => {
    res.statusCode=  403;
  res.end('put is not  supported with dishes');
});

app.delete('/dishes', (req, res, next) => {
  res.end('will delete all the deshes');
});

// request with dishes and param dish id 
app.get('/dishes/:dishId', (req, res, next) => {
  res.end('will send you details' + req.params.dishId);
});

app.post('/dishes/:dishId', (req, res, next) => {
  res.end('will add dish'+ req.body.name + 'with details'
          + req.body.description+ ' for '+ req.params.dishId);
});

app.put('/dishes/:dishId', (req, res, next) => {
 res.write('update data for dish '+ req.params.dishId)
  res.end('will update data for '+ req.params.dishId+ 
         'with '+ req.body.name +' and ' + 'details with'+req.body.description);
});

app.delete('/dishes/:dishId', (req, res, next) => {
  res.end('will delete the desh '+req.params.dishId);
});
*/


/* == code with express rouer */

app.use('/dishes', dishRouter);

app.use((req, res, next) => {
console.log('request header', req.headers);
        res.statusCode = 200;
        res.setHeader('content-type', 'text/html');
        res.end('<html><body> <h1> Running express server</h1> </body> </html>');
})


const server =  http.createServer(app);
server.listen(port, hostName, () => {
    
    console.log(`server listening at http://${hostName}:${port}`);
})