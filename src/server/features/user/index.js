
"use strict";
const {toseedarray}=require('./userSeed').toinit();
const {index$,
  getall,
  getbyid$,
  insert$,
  update$,
  odasearchby,
  delete$,userSeed$}=require('./userCtrl').toinit();
const  index = (function () {

  function toinit() {
    return {
seeduser$:userSeed$,
getall: getall,
index$: index$,
getbyid$: getbyid$,
insert$: insert$,
update$: update$,
odasearchby: odasearchby,
delete$: delete$,
toseedarray:toseedarray
    };
  }

return {
  toinit: toinit
};



}
)();
module.exports= {
toinit:index.toinit
};


