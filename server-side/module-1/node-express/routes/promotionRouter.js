const express = require('express');
const bodyParser = require('body-parser');


promotionRouter =  express.Router();

promotionRouter.use(bodyParser.json());


promotionRouter.route('/')
.all((req,res,next) => {
    // any changes done here with req or res will send update  one to next matchin one request
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    console.log('this is' + req.body);
    next();
})
.get((req, res, next) => {
  res.end('will send you details of all promotions');
})
.post((req, res, next) => {
  res.end('will add promotion'+ req.body.name + 'with details'
          + req.body.description);
})
.put((req, res, next) => {
    res.statusCode=  403;
  res.end('put is not  supported with promotion');
})
.delete((req, res, next) => {
  res.end('will delete all the promotion');
});

// routes with promotionId as param
leaderRouter.route('/:promotionId')
.get((req, res, next) => {
  res.end('will send you promotion details' + req.params.promotionId);
})
.post((req, res, next) => {
  res.end('will add promotion'+ req.body.name + 'with details'
          + req.body.description+ ' for '+ req.params.promotionId);
})
.put((req, res, next) => {
 res.write('update data for promotion '+ req.params.promotionId)
  res.end('will update data for '+ req.params.promotionId+ 
         'with '+ req.body.name +' and ' + 'details with'+req.body.description);
})
.delete((req, res, next) => {
  res.end('will delete the promotion '+req.params.promotionId);
});

module.exports =  promotionRouter;