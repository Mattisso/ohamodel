"use strict";
const _ = require('lodash');
const async = require('async');
const {olevel} = require('../../omodels/index').toinit();
const {oleveldata} = require('../../seed/data-seed/index').toinit();
const {toOlevel}=require('./Staticolevel').toinit();
const {concat } = require('rxjs');
const {svctoseedOthersInstance, svcodaDel$, svcodasave$} = require('../../SharedKernel/odaservice').toinit();

const toseedarray=svctoseedOthersInstance(olevel,oleveldata,toOlevel);

const olevelSeed = (function () {
  var removeData$=function(model, item){
return   svcodaDel$(model,item);
  };
  const insertolevel$ = function(arr) {
    return svcodasave$(arr);
  };

const result$= concat(removeData$(olevel,'olevel'),insertolevel$(toseedarray));
  function toinit() {
    return {
      result$:result$
    };
  }

return {
  toinit: toinit
};

}
)();
module.exports= {
toinit:olevelSeed.toinit
};

