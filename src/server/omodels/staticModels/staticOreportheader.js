
"use strict";
const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;
const { find, map, assign, filter, forEach,maxBy,ary,toString,toNumber} = require('lodash');
const {staticObjects} =require('../../SharedKernel/index').toinit();
const { isValid, odauditObj, getStringValue, replaceNullToZero } = require('../../SharedKernel/odaUtility').toinit();
const staticOreportheader = (function () {  

const modelObject = {
	OtableauposteKey: {
		type: ObjectId,
		ref: 'oTableauPoste'
	},
	OreferenceKey: {
		type: ObjectId,
		ref: 'oReference'
	},
	SortOrderH: {
		type: Number,
	default:
		1
	},

}

class oreportHeaderClass {
	constructor(OtableauposteKey, OreferenceKey, SortOrderH) {
		this._SortOrderH = SortOrderH;
		this._OtableauposteKey = OtableauposteKey;
		this._OreferenceKey = OreferenceKey;
	}

	get sortorderH() {
		return this._SortOrderH;
	}
	set SortOrderH(SortOrderH) {
		this._SortOrderH = SortOrderH;
		return this;
	}
	get otableaupostekey() {
		return this._OtableauposteKey;
	}
	set otableaupostekey(OtableauposteKey) {
		this._OtableauposteKey = OtableauposteKey;
		return this;
	}
	get oreferencekey() {
		return this._OreferenceKey;
	}
	set oreferencekey(OreferenceKey) {
		this._OreferenceKey = OreferenceKey;
		return this;
	}

}

  const toOreportheader = function (o) {
    return (
      {
      "OtableauposteKey": o.OtableauposteKey,
      "OreferenceKey": o.OreferenceKey,
      "SortOrderH": o.SortOrderH
      });
  };
  const togetoreportheader = function (argOne) {
    let initObj, odauditobj;
    return map(argOne, function (obj) {
      initObj = {
        "id": obj.id,
        "OtableauposteKey": obj.OtableauposteKey,
        "OreferenceKey": obj.OreferenceKey,
        "SortOrderH": obj.SortOrderH
      };
      odauditobj = odauditObj(obj);
      return assign({}, initObj, odauditobj);
    }
    );
  };
  const getObjoreportheader = function (arr, value) {
    if (isValid(value) === true) {
      const validate = find(arr, function (o) {
          return  o.OreferenceKey === getStringValue(value)
          || o.OtableauposteKey === getStringValue(value)
          || o.id === getStringValue(value);
        });
      return {
        odaObject: function () {
          return validate;
        },
        filteredObject: function () {
          return {
            OreferenceKey: validate.OreferenceKey,
            OtableauposteKey: validate.OtableauposteKey
          };
        }
      };
    } else {
      return new Error(
`Invalid  ${value}`);
    }
  };
  function toUpdateoreportheader(body) {
    let d = new Date(), result={};
    if (result) {
      {
          result.id = body.id,
          result.OtableauposteKey = body.OtableauposteKey,
          result.OreferenceKey = body.OreferenceKey,
          result.SortOrderH = body.SortOrderH,
          result.ModifiedOn = d;
      }
    }
    return result;
  }
  function toinit() {
    return {
      modelObject:modelObject,
      oreportHeaderClass:oreportHeaderClass,
      toOreportheader: toOreportheader,
      togetoreportheader:togetoreportheader,
      getObjoreportheader:getObjoreportheader,
      toUpdateoreportheader:toUpdateoreportheader
    };
  }

return {
  toinit: toinit
};

}
)();
module.exports= {
toinit:staticOreportheader.toinit
};


