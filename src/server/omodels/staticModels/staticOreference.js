' use strict'
const mongoose = require('mongoose'),
 ObjectId = mongoose.SchemaTypes.ObjectId;
const { getStringValue,isValid,odauditObj, odareduceArray} = require('../../SharedKernel/odaUtility').toinit();
const { find, map, toLower, toUpper, assign, uniqBy } = require('lodash');
const staticObjects = require('../../SharedKernel/staticObjects').toinit();
const { getodafilter,odaByarg} = require('../../SharedKernel/odaFiltered').toinit();

const staticOreference = (function () {
  
  function toUpdateoreference(requestBody) {
    let d = new Date(), result={};
    if (result) {
      {
       result._id = requestBody.id,
        result.RefCode = requestBody.RefCode,
        result.Description = requestBody.Description,
        result.ModifiedOn = d;
      }
    }
    return result;
  }
  const getobjOreference = function (arr, value) {
    if (isValid(value) === true) {
      const validate = find(arr, function (o) {
          return o.RefCode === getStringValue(value)
          || o.OreferenceKey === getStringValue(value)
           || o.id === getStringValue(value);
        });
      return {
        odaObject: function () {
          return validate;
        },
        filteredObject: function () {
        return {
       "RefCode": validate.RefCode,
        "Description": validate.Description,
        "fullDescription": validate.fullDescription
        };
      }
      };
    } else {
      return new Error(
`Invalid  ${value}`);
    }
  };
  const togetoreference = function (argOne) {
    let initObj, odauditobj;
    const arr = map(argOne, function (obj) {
      initObj = {
        "id": obj.id,
        "RefCode": obj.RefCode,
        "Description": obj.Description,
        "fullDescription": obj.fullDescription
      };
      return map(obj.ocomptes, function (ocompte) {
        var _tobj = { "OcompteKey": ocompte.id };
        odauditobj = odauditObj(obj);
        return assign({}, initObj, _tobj, odauditobj);
      }
      );
    });
    return odareduceArray(arr);
  };
  const staticReferenceByYears= function(comptebalances,oreferences) {
    const finalobj=   map(comptebalances, function (obj) {
      const filteredvalue = odaByarg('id', obj.OreferenceKey);
          const filteredOreference = getodafilter(oreferences,filteredvalue);
          const validate = staticObjects.getobjOreference(filteredOreference, obj.OreferenceKey).odaObject();
          //  const validate = _.find(getoreferences, filteredBy.getOreferenceKey(obj));
          return ({
            "OreferenceKey": validate.id,
            "fullDescription": validate.fullDescription,
            "OtableauposteKey": obj.OtableauposteKey,
            "OexercComptaKey": obj.OexercComptaKey,

          });
        });
        return finalobj;
  };
const statictReferenceByoTableauPostes=function(ocomptreferences,oreferences){
  const arr = map(ocomptreferences, function (obj) {
    const filteredvalue = odaByarg('id', obj.OreferenceKey);
    const filteredOreference = getodafilter(oreferences, filteredvalue);
    var validate = staticObjects.getobjOreference(filteredOreference, obj.OreferenceKey).odaObject();
    return ({
      "OreferenceKey": validate.id,
      "fullDescription": validate.fullDescription,
      "OtableauposteKey": obj.OtableauposteKey

    });
  });
  return uniqBy(arr, 'OreferenceKey');
};
  function toinit() {
    return {
      initObjOreference:initObjOreference,
      oreferenceClass:oreferenceClass,
      toOreference: toOreference,
      toUpdateoreference: toUpdateoreference,
      togetoreference:togetoreference,
      getobjOreference:getobjOreference,
      statictReferenceByoTableauPostes:statictReferenceByoTableauPostes,staticReferenceByYears:staticReferenceByYears
    };

  }

  return {
    toinit: toinit
  };
})();
module.exports = {
  toinit: staticOreference.toinit
};

