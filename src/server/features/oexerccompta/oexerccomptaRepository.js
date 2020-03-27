/* eslint-disable  no-console */
/* eslint-disable no-unused-vars */
const _ = require('lodash');
const  {oExercCompta} = require('../../omodels').toinit();
const {getoexercices$, seedoexercice$} = require('../oexercice/').toinit();
const {odaByarg,getodafilter} =require('../../SharedKernel/odaFiltered').toinit();
const {togetoexerccompta,toUpdateOexercompta, toOexercompta,staticDropListExerComptable}=require('./staticOxerccompta').toinit();
const {getobjOexercCompta} =require('../../SharedKernel/staticObjects').toinit();
const { combineLatest, Observable, concat,pipe } = require('rxjs');
const { map} = require('rxjs/operators');
const {svctoInitializeInstance,svctoapiUpdateInstance,svcodasave$,svcodaApiupdate$, svcodaApiDel$,svcodaSearchBy}=require('../../SharedKernel/odaservice/odaservice').toinit();
const {getodaindex$, odaindex,getodaByid$,toOdaUpdate$,toOdaCreate$,getodaApiByid$,getodaindexapi$}=require('../../SharedKernel/dataservices').toinit();
const {toInitializeInstance, svctoInitializeInstance$,svctoUpdateInstance$}=require('../../sharedkernel/odainstance/index').toinit(); 
const oexerccomptaRepository = (function () {
  const toseedoexercompta=toInitializeInstance(oExercCompta,oexercomptadata);

  const  _removeoExercCompta$= function(model,item) {
    return   svcodaDel$(model,item);
      };
      const _insertoExercCompta$ = function(arr) {
     return  svcodasave$(arr);
        };
        const removeoExercCompta$=_removeoExercCompta$(oExercCompta,'oExercCompta');
      const insertoExercCompta$ =_insertoExercCompta$(toseedoexercompta);

        const seedOexerccompta$ = concat(removeoExercCompta$,insertoExercCompta$,seedoexercice$);


  const index = function (callback) {
    return odaindex(oExercCompta, togetoexerccompta, callback);
  };
  const getoExerciceEncour$ = Observable.create(function (observer) {
      try {
        return odaindex(oExercCompta, togetoexerccompta, function (err, data) {
          if (err) {
            observer.next(err);
          } else {
            const finalObj = _.maxBy(_.map(_.map(data, 'oExercComptaId'), _.ary(parseInt, 1)));
            const getcurrent = getobjOexercCompta(data, _.toString(finalObj)).odaObject();
            observer.next(getcurrent);
            setTimeout(() => {
              observer.complete();
            }, 100);
          }
        });
      } catch (err) {
        observer.error(err);
      }
    });
    const getexeccomptas$ =  function() {
      return  getodaindex$(oExercCompta, togetoexerccompta);
    };

    const getapiexeccomptas$ =  function() {
      return  getodaindexapi$(oExercCompta);
    };

    const getapiByid$ = function (requestparamid) {
      return  getodaApiByid$(oExercCompta, requestparamid,getobjOexercCompta);
    };

  const GetComptaWithExercice$ = combineLatest(getexeccomptas$(), getoexercices$).pipe(
      //  tap(ev => console.log(ev)),
      map(function ([getoexcomptas, getoexercices]) {
        const filteredvalue = _.map(getoexercices, 'OexercComptaKey');
        return getodafilter(getoexcomptas, odaByarg('id', filteredvalue));
      }));

      const _DropDownListExerComptable = pipe(
        map(function (n) {
          return staticDropListExerComptable(n);
        })
      );
      const DropDownListExerComptable$ = _DropDownListExerComptable(getexeccomptas$());

  const getByid$ = function (requestparamid) {
    return  getodaByid$(oExercCompta, togetoexerccompta,requestparamid,getobjOexercCompta);

  };
  const toCreateExerccomptadata$ = function (requestBody) {

    return toOdaCreate$(oExercCompta, requestBody, toOexercompta, svctoInitializeInstance);
  };

  const toUpdateExerccomptadata$ = function (requestBody,requestparamid) {
    return toOdaUpdate$(requestBody,requestparamid, toUpdateOexercompta, svctoapiUpdateInstance);
  };

  const insertExercCompta$ = function (arr) {
    return svcodasave$(arr);
  };

  const editExercCompta$ = function (body, requestparamid) {
    return (svcodaApiupdate$(oExercCompta, body, requestparamid));
  };
  const odasearchBy = function (body) {
    return svcodaSearchBy(oExercCompta, body);
  };
  const deleteExercCompta$ = function (requestparamid) {
    return  svcodaApiDel$(oExercCompta, requestparamid);
  };

  function toinit() {
    return {
      getoExercice$: getoexercices$,
      index: index,
      GetComptaWithExercice$: GetComptaWithExercice$,
      getoExerciceEncour$: getoExerciceEncour$,
      getexeccomptas$: getapiexeccomptas$(),
      getByid$: getapiByid$,
      toCreateExerccomptadata$: toCreateExerccomptadata$,
      insertExercCompta$: insertExercCompta$,
      toUpdateExerccomptadata$: toUpdateExerccomptadata$,
      editExercCompta$: editExercCompta$,
      odasearchBy: odasearchBy,
      deleteExercCompta$: deleteExercCompta$,
      DropDownListExerComptable$:DropDownListExerComptable$
    };
  }

  return {
    toinit: toinit
  };

})();
module.exports = {
  toinit: oexerccomptaRepository.toinit
};
