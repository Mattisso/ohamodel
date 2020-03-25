
"use strict";

const _ = require('lodash');
const  {User} = require('../../omodels/index').toinit();
const {togetuser,getobjuser,toUpdateUser,toUser}=require('./staticUser').toinit();
const { combineLatest, Observable, of, pipe, from } = require('rxjs');
const { filter, map, tap, pluck, find } = require('rxjs/operators');
const {getodaindex$, odaindex,getodaByid$,toOdaUpdate$,toOdaCreate$}=require('../../SharedKernel/dataservices').toinit();
const {svctoInitializeInstance,svctoapiUpdateInstance,svctoUpdateInstance,svcodaseedUsersave$,svcodasave$,svcapiupdate$, svcodaApiDel$,svcodaSearchBy}=require('../../SharedKernel/odaservice').toinit();

const userRepository = (function () {
  const index = function (callback) {
    return odaindex(User,togetuser,callback);
  };

  const index$ = function(){
    return getodaindex$(User,togetuser);
  };
  const getByid$ = function (requestparamid) {
    return  getodaByid$(User,togetuser,requestparamid,getobjuser);

  };

   const toCreateuserdata$ = function (requestBody) {
    return toOdaCreate$(User, requestBody, toUser, svctoInitializeInstance);
   };
   const insertuser$ = function (arr) {
    return svcodaseedUsersave$(User,arr);
   };
   const toUpdateuserdata$ = function (requestBody,requestparamid) {
    return toOdaUpdate$(requestBody,requestparamid, toUpdateUser, svctoapiUpdateInstance);
   };

   const edituser$ = function (body, requestparamid) {
    return svcapiupdate$(User, body, requestparamid);
   };
   const odasearchBy = function (body) {
    return svcodaSearchBy(User, body);
   };
   const Deleteuser$ = function (requestparamid) {
    return svcodaApiDel$(User, requestparamid);
   };

  function toinit() {
    return {
      getusers$: index$(),
      getAll: index,
      getByid$:getByid$,
      insertuser$:insertuser$,
      toCreateuserdata$:toCreateuserdata$,
      toUpdateuserdata$:toUpdateuserdata$,
      edituser$:edituser$,
      odasearchBy:odasearchBy,
      Deleteuser$:Deleteuser$
    };
  }

  return {
    toinit: toinit
  };



}
)();
module.exports = {
  toinit: userRepository.toinit
};

