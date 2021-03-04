const express = require('express');
const bodyParser = require('body-parser');


dishRouter =  express.Router();

dishRouter.use(bodyParser.json());


dishRouter.route('/')
.all((req,res,next) => {
    // any changes done here with req or res will send update  one to next matchin one request
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    console.log('this is' + req.body);
    next();
})
.get((req, res, next) => {
  res.end('will send you details of all dishes');
})
.post((req, res, next) => {
  res.end('will add dish'+ req.body.name + 'with details'
          + req.body.description);
})
.put((req, res, next) => {
    res.statusCode=  403;
  res.end('put is not  supported with dishes');
})
.delete((req, res, next) => {
  res.end('will delete all the deshes');
});

// routes with dishId as param
dishRouter.route('/:dishId')
.get((req, res, next) => {
  res.end('will send you details' + req.params.dishId);
})
.post((req, res, next) => {
  res.end('will add dish'+ req.body.name + 'with details'
          + req.body.description+ ' for '+ req.params.dishId);
})
.put((req, res, next) => {
 res.write('update data for dish '+ req.params.dishId)
  res.end('will update data for '+ req.params.dishId+ 
         'with '+ req.body.name +' and ' + 'details with'+req.body.description);
})
.delete((req, res, next) => {
  res.end('will delete the desh '+req.params.dishId);
});

module.exports =  dishRouter;