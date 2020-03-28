"use strict";
const {oReportHeader} = require('../../omodels/index').toinit();
const {toOreportheader}=require('./staticOreportheader').toinit();
const { pipe, concat } = require('rxjs');
const { map, concatMap } = require('rxjs/operators');
const {svctoseedOthersInstance, svcodaDel$, svcodasave$} = require('../../SharedKernel/odaservice').toinit();
const { odaremove} = require('../../SharedKernel/odaUtility').toinit();
 const {getseedreportheaderdata$} = require('../../sharedkernel/odarepository/');

 const {toInitializeInstance$}=require('../../sharedkernel/odainstance/toInitializeInstance').toinit(); 
const oreportheaderSeed = (function () {
  const _removeData$ = function (model,item) {
    return   svcodaDel$(model,item);
  };


  const getObserverdata = pipe(
    map(function(n){
     const filtereddatas = odaremove(n);
     return toInitializeInstance(oReportHeader,filtereddatas,toOreportheader);
    })    // ,
    // ,tap(ev => console.log(ev))
  );
  const toseedoreportheaderdata$ = getObserverdata(getseedreportheaderdata$);
  const removeoreportheader$ = _removeData$(oReportHeader,'oReportHeader');

  const _insertoreportheader = function (arr) {
    return svcodasave$(arr);
  };

  const insertoreportheader$ = toseedoreportheaderdata$.pipe(concatMap(function (x) {
    return  _insertoreportheader(x);
  })
  );

  const seedoreportheader$ = concat(removeoreportheader$, insertoreportheader$);

  function toinit() {
    return {
result$:seedoreportheader$,
toseedoreportheaderdata$:toseedoreportheaderdata$
    };
  }

return {
  toinit: toinit
};

})();
module.exports= {
toinit:oreportheaderSeed.toinit
};


