/* eslint-disable  no-console */
/*eslint-disable no-unused-vars */
const express = require('express');
const url = require('url');
const _=require('lodash');
const oreportheadersRouter = express.Router();
const {odaByarg} = require('../../server/SharedKernel/odaFiltered').toinit();
const {index$,insert$,delete$,update$,getbyid$,odasearchby} = require('../../server/features/oreportheader/index').toinit();
const {getapistreamdata$,getapiObserver, getapiCreateObserver, getapinotification}=require('../../server/SharedKernel/odaSubscribe').toinit();

oreportheadersRouter.get('/oreportheaders', function (req, res, next) {
  const getdata= index$;
  return  getapistreamdata$(getdata).subscribe(getapinotification(req,res)
  );
//  next();

});

oreportheadersRouter.get('/oreportheaders/:id', function (req, res, next) {
  console.log(req.url + ' : querying for ' + req.params.id);
  if (req.params.id) {
    const getdata= getbyid$(req.params.id);
    getapistreamdata$(getdata).subscribe(getapinotification(req, res));
  }else {
    next();
  }
});

oreportheadersRouter.post('/oreportheaders', function (req, res, next) {
  let requestBody = req.body;
  const _comptenumber = odaByarg('OreferenceKey',requestBody.OreferenceKey);
  odasearchby(_comptenumber)
    .exec(function (err, data) {
      console.log(data);
      if (err) {
        return next(err);
      }
      if (data) {
        res.status(403).send({
          success:false,
          message:` OreferenceKey: ${requestBody.OreferenceKey}  already exists`
        });
      }
      if(!data){
        const getdata= insert$(requestBody);
        getapistreamdata$(getdata).subscribe(getapiCreateObserver(req));
      }

    });
});


oreportheadersRouter.put('/oreportheaders/:id', function (req, res, next) {
  const requestBody = req.body;
  console.log(req.url + ' : querying for ' + req.params.id);
  var reqparamid = req.params.id;
  const getdata= update$(requestBody, reqparamid);
  getapistreamdata$(getdata).subscribe(getapiCreateObserver(req));
});


oreportheadersRouter.delete('/oreportheaders/:id', function (req, res, next) {

  console.log(req.url + ' : querying for ' + req.params.id);
  const getdata= delete$(req.params.id);
  getapistreamdata$(getdata).subscribe(getapiCreateObserver(req));
  next();


});


module.exports = oreportheadersRouter;
