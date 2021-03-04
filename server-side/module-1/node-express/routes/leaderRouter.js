const express = require('express');
const bodyParser = require('body-parser');


leaderRouter =  express.Router();

leaderRouter.use(bodyParser.json());


leaderRouter.route('/')
.all((req,res,next) => {
    // any changes done here with req or res will send update  one to next matchin one request
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    console.log('this is' + req.body);
    next();
})
.get((req, res, next) => {
  res.end('will send you details of all leaders');
})
.post((req, res, next) => {
  res.end('will add leader'+ req.body.name + 'with details'
          + req.body.description);
})
.put((req, res, next) => {
    res.statusCode=  403;
  res.end('put is not  supported with leaders');
})
.delete((req, res, next) => {
  res.end('will delete all the leaders');
});

// routes with leaderId as param
leaderRouter.route('/:leaderId')
.get((req, res, next) => {
  res.end('will send you leader details' + req.params.leaderId);
})
.post((req, res, next) => {
  res.end('will add leader'+ req.body.name + 'with details'
          + req.body.description+ ' for '+ req.params.leaderId);
})
.put((req, res, next) => {
 res.write('update data for leader '+ req.params.leaderId)
  res.end('will update data for '+ req.params.leaderId+ 
         'with '+ req.body.name +' and ' + 'details with'+req.body.description);
})
.delete((req, res, next) => {
  res.end('will delete the leader '+req.params.leaderId);
});

module.exports =  leaderRouter;