
"use strict";
const _ = require('lodash');
const mongoose = require('mongoose'),
 ObjectId = mongoose.SchemaTypes.ObjectId;

const {getobjOexercCompta} =require('../../SharedKernel/staticObjects').toinit();
const { isValid, odauditObj, getStringValue, replaceNullToZero } = require('../../SharedKernel/odaUtility').toinit();


const StaticOexercice = (function () {
    const initObjOexcerice ={
        oExerciceEncour:{type: String },
        ExercicePrev: { type: String },
        OexercComptaKey: {type: ObjectId, ref: 'oExercCompta' },
        OexercComptaPrevKey: { type: ObjectId, ref: 'oExercCompta' },
        OexercComptaEncourKey: { type: ObjectId,  ref: 'oExercCompta' }}

        class oExerciceClass {
            constructor(oExerciceEncour,ExercicePrev,OexercComptaKey,OexercComptaPrevKey,OexercComptaEncourKey) {
              this._oexerciceEncour = oExerciceEncour
              this._exercicePrev = ExercicePrev,
              this._oexerccomptaKey = OexercComptaKey,
              this._oexercComptaPrevKey = OexercComptaPrevKey,
              this._oexercComptaEncourKey = OexercComptaEncourKey
            }
            get oexerciceEncour() {
              return this._oexerciceEncour;
            }
          
            set oexerciceEncour(oExerciceEncour) {
              this._oexerciceEncour = oExerciceEncour;
              return this;
            }
            get oexerccomptakey() {
              return this._oexerccomptaKey;
            }  
            set oexerccomptakey(OexercComptaKey) {
              this._oexerccomptaKey = OexercComptaKey;
              return this;
            }
          }

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
      const validate = _.find(arr, function (o) {
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
        oExerciceClass:oExerciceClass,
        initObjOexcerice:initObjOexcerice,
      toOexercice:toOexercice,
      togetoexercices:togetoexercices,
      tocreateOexerciceObject:tocreateOexerciceObject,
      getobjOexercice:getobjOexercice
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

