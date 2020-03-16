//  async = require('async')
const { find, map, assign, filter, forEach,maxBy,ary,toString,toNumber} = require('lodash');
const {staticObjects} =require('../../SharedKernel/index').toinit();
const { isValid, odauditObj, getStringValue } = require('../../SharedKernel/odaUtility').toinit();


const staticOxerccompta= (function () {
  const initObject = {
    oExercComptaId: {
      type: String,
      required: true,
      unique: true
    },
    DateDebut:
    {
      type: Date,
      default:
        Date.now
    },
  Datefin:
    {
      type: Date,
      default:
        Date.now
    },
  Cloture:
    {
      type: Boolean,
      default:
        true
    }
  }
  class oExercComptalass {
    constructor(oExercComptaId, DateDebut, Datefin, Cloture) {
this._oExercComptaId =oExercComptaId;
this._DateDebut =DateDebut;
this._Datefin =Datefin;
this._Cloture =Cloture;
    }
  get oexerccomptaid() {
	return this._oExercComptaId;
}
get datedebut() {
	return this._DateDebut;
}
get datefin() {
	return this._Datefin;
}
get cloture() {
	return this._Cloture;
}

set oexerccomptaid(oExercComptaId) {
	this._oExercComptaId = oExercComptaId;
	return this;
}
set datedebut(DateDebut) {
	this._DateDebut = DateDebut;
	return this;
}
set datefin(Datefin) {
	this._Datefin = Datefin;
	return this;
}
set cloture(Cloture) {
	this._Cloture = Cloture;
	return this;
}

  }
  const odaqueryselector = function (obj) {
    let selector;
    if (isValid(obj.oExercComptaId) === true && isValid(obj.DateDebut) === true
       && isValid(obj.Datefin ) === true) {
      selector = true;
    }
     else {
      selector = false;
    }
    return selector;
  };
function toOexercompta(o) {
  let isvalid=odaqueryselector(o);
    if (isvalid===true) {
  return ({
    "oExercComptaId": o.oExercComptaId,
    "DateDebut": o.DateDebut,
    "Datefin": o.Datefin,
    "Cloture": o.Cloture,

  });
}
}
const togetoexerccompta = function (argOne) {
  let initObj, odauditobj;
  return map(argOne, function (obj) {
    initObj = {
      "id": obj.id,
      "oExercComptaId": obj.oExercComptaId,
      "DateDebut": obj.DateDebut,
      "Datefin": obj.Datefin,
     "Cloture": obj.Cloture
    };
    odauditobj = odauditObj(obj);
    return assign({}, initObj, odauditobj);
  });
};
const toOexercice= function (model, arr) {
  const  _getcurrentYear= maxBy(map(map(arr,'oExercComptaId'), ary(parseInt, 1)));
 var getcurrentObject = staticObjects.getobjOexercCompta(arr, toString(_getcurrentYear)).odaObject();
 return new model({
  "oExerciceEncour": getcurrentObject.oExercComptaId,
   "ExercicePrev":  toString(toNumber(getcurrentObject.oExercComptaId)-1)?toString(toNumber(getcurrentObject.oExercComptaId)-1):'1900',
   "OexercComptaKey":  getcurrentObject.id
 });
};

const staticDropListExerComptable=function(execcomptas) {
 const arr =map(execcomptas, function (obj) {
  return ({
      "OexercComptaKey": obj.id,
      "oExercComptaId": obj.oExercComptaId
  });

});
return arr;
};

function toUpdateOexercompta (requestBody) {
  let d = new Date(), result={};
  if (result) {
  {
    result.id = requestBody.id,
    result.oExercComptaId = requestBody.oExercComptaId,
    result.DateDebut = requestBody.DateDebut,
    result.Datefin = requestBody.Datefin,
    result.Cloture = requestBody.Cloture,
    result.ModifiedOn = d;

  }
}
return result;
}

const getobjOexercCompta = function (arr, value) {
  if (isValid(value) === true) {
    const validate = find(arr, function (o) {
      return o.oExercComptaId === getStringValue(value)
      || o.id === getStringValue(value);
      });
    return {
      odaObject: function () {
        return validate;
      }
    };

  } else {
    return new Error(`No Data return for ${value}`);
  }
};

function toinit() {

  return {
    oExercComptalass:oExercComptalass,
    initObject:initObject,
    toOexercompta:toOexercompta,
    toUpdateOexercompta:toUpdateOexercompta,
    toOexercice:toOexercice,
    togetoexerccompta:togetoexerccompta,
    odaqueryselector:odaqueryselector,
    getobjOexercCompta:getobjOexercCompta,
    staticDropListExerComptable:staticDropListExerComptable
  };

}

return {
  toinit: toinit
};
})();
module.exports= {
toinit:staticOxerccompta.toinit
};

