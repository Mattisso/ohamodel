
"use strict";
const _ = require('lodash');

const { find, map, assign, filter, forEach,maxBy,ary,toString,toNumber} = require('lodash');
const {getobjOexercCompta} =require('../../SharedKernel/staticObjects').toinit();
const { isValid, odauditObj, getStringValue, odaremoveDupnumcompte, odareduceArray,addItem} = require('../../SharedKernel/odaUtility').toinit();

const StaticOexercice = (function () {

  const tocreateOexerciceObject= function(arr) {
    const  _getcurrentYear= _.maxBy(_.map(_.map(arr,'oExercComptaId'), _.ary(parseInt, 1)));
    let getcurrentObject = getobjOexercCompta(arr, _.toString(_getcurrentYear)).odaObject();
    return getcurrentObject;
  };
  const toOexercice= function (o) {
   return ({
    "oExerciceEncour": o.oExercComptaId,
     "ExercicePrev":  _.toString(_.toNumber(o.oExercComptaId)-1)?_.toString(_.toNumber(o.oExercComptaId)-1):'1900',
    "OexercComptaKey":  o.id
   });
  };

  let toCreateModel = null
  function BuildOexercice(model,body, toinitobj,fn) {
    let toacreateinstance=fn;
    toCreateModel =toacreateinstance(model,body,toinitobj);    
    const arr = addItem(toCreateModel);
    return odareduceArray(arr);
  } 
              
       
        function toInitOexerciceInstance(model,body,toinitobj,fn) {
          const getCreatedModel = BuildOexercice(model,body,toinitobj,fn);

  return ({
    'getAgregateData':getodaAggreateData(odaremoveDupnumcompte(balance)),
     'odaData': odaremoveDupnumcompte(getCreatedModel.slice())
  })

     }
  const togetoexercices = function (argOne) {
    let initObj, odauditobj;
    return _.map(argOne, function (obj) {
      initObj = {
        "id": obj.id,
        "OexercComptaKey": obj.OexercComptaKey,
        "oExerciceEncour": obj.oExerciceEncour,
        "ExercicePrev": obj.ExercicePrev
      };
      odauditobj = odauditObj(obj);
      return _.assign({}, initObj, odauditobj);
    }
    );
  };
  const getobjOexercice = function (arr, value) {
    if (isValid(value) === true) {
      const validate = find(arr, function (o) {
        return o.OexercComptaKey === getStringValue(value)
          || o.oExerciceEncour === getStringValue(value)
          || o.OexercComptaPrevKey === getStringValue(value)
          || o.ExercicePrev === getStringValue(value)
          || o.id === getStringValue(value);
      });
      return {
        odaObject: function () {
          return validate;
        }
      };
    } else {
      return new Error(
        `Invalid  ${value}`);
    }
  };
  function toinit() {
    return {
      toOexercice:toOexercice,
      togetoexercices:togetoexercices,
      tocreateOexerciceObject:tocreateOexerciceObject,
      getobjOexercice:getobjOexercice,
      toInitOexerciceInstance:toInitOexerciceInstance
    };
  }
return {
  toinit: toinit
};



}
)();
module.exports= {
toinit:StaticOexercice.toinit
};

