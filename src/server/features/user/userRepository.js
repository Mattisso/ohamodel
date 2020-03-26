
"use strict";
const  {User} = require('../../omodels/modelsSchema').toinit();
const {userdata} = require('../../seed/data-seed/index').toinit();
const {togetuser,togetObjuser,toUpdateUser,toUser}=require('./staticUser').toinit();
const {getodaindex$, odaindex,getodaByid$}=require('../../sharedkernel/odaservice/dataservices').toinit();
const {svcodaseedUsersave$, svcapiupdate$,svcodaApiDel$,svcodaSearchBy,svcodaDel$}=require('../../sharedkernel/odaservice/odaservice').toinit();
const {toInitializeInstance, svctoInitializeInstance$,svctoUpdateInstance$}=require('../../sharedkernel/odainstance/index').toinit(); 

const userRepository = (function () {

  const toseedarray=toInitializeInstance(User,userdata);

  const _removeData$= function(model,item) {
    return  svcodaDel$(model,item);
  };
 const _insertuser$ = function(model, arr) {
return svcodaseedUsersave$(model,arr); 
  };
  const removeData$= _removeData$(User,'User');

  const insertuser$= _insertuser$(User, toseedarray);

const seedresult$= concat(removeData$,insertuser$);

  const index = function (callback) {
    return odaindex(User,togetuser,callback);
  };

  const index$ = function(){
    return getodaindex$(User,togetuser);
  };
  const getByid$ = function (requestparamid) {
    return  getodaByid$(User,togetuser,requestparamid,togetObjuser);

  };

   const toCreateuserdata$ = function (requestBody,requestparamid) {
    return svctoInitializeInstance$(User, requestBody, requestparamid,toUser);
   };
/*    const insertuser$ = function (arr) {
    return svcodaseedUsersave$(User,arr);
   }; */
   const toUpdateuserdata$ = function (requestBody) {
    return svctoUpdateInstance$(requestBody, toUpdateUser);
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
      Deleteuser$:Deleteuser$,
      seedresult$:seedresult$,
      toseedarray:toseedarray
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

