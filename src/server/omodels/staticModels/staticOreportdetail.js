
"use strict";
const mongoose = require('mongoose'),
 ObjectId = mongoose.SchemaTypes.ObjectId;
const { find, map, assign, filter, forEach } = require('lodash');
const { isValid, odauditObj, getStringValue } = require('../../SharedKernel/odaUtility').toinit();
const {getTotalCount} = require('../../sharedkernel/odaStats').toinit();


const staticOreportdetail = (function () { 
const modelObject = {
	OtableauposteKey: {
		type: ObjectId,
		ref: 'oTableauPoste'
	},
	OreferenceKey: {
		type: ObjectId,
		ref: 'oReference'
	},
	olevelKey: {
		type: ObjectId,
		ref: 'olevel'
	},
	SortOrder: {
		type: Number,
	default:
		1
	}
}

class oreportDetailClass {
	constructor(OtableauposteKey, OreferenceKey, olevelKey, SortOrder) {
		this._SortOrder = SortOrder;
		this._OtableauposteKey = OtableauposteKey;
		this._OreferenceKey = OreferenceKey;
		this._olevelKey = olevelKey;
	}

	get sortorder() {
		return this._SortOrder;
	}
	set sortorder(SortOrder) {
		this._SortOrder = SortOrder;
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
	get olevelkey() {
		return this._olevelKey;
	}
	set olevelkey(olevelKey) {
		this._olevelKey = olevelKey;
		return this;
	}
}

  const toOreportDetail = function (o) {
    return ({
      "OtableauposteKey": o.OtableauposteKey,
      "OreferenceKey": o.OreferenceKey,
      "olevelKey": o.olevelKey,
      "SortOrder": o.SortOrder
    });
  };
  const togetoreportdetail = function (argOne) {
    let initObj,
    odauditobj;
    return map(argOne, function (obj) {
      initObj = {
        "id": obj.id,
        "OtableauposteKey": getStringValue(obj.OtableauposteKey),
        "OreferenceKey": getStringValue(obj.OreferenceKey),
        "olevelKey": getStringValue(obj.olevelKey),
        "SortOrder": obj.SortOrder
      };
      odauditobj = odauditObj(obj);

      return assign({}, initObj, odauditobj);
    });

  };
  const getObjoreportdetail = function (arr, value) {
    if (isValid(value) === true) {
      const validate = find(arr, function (o) {
          return o.OreferenceKey === getStringValue(value)
           || o.OtableauposteKey === getStringValue(value)
           || o.olevelKey === getStringValue(value)
           || o.id === getStringValue(value);
        });
      return {
        odaObject: function () {
          return validate;
        },
        filteredObject: function () {
          return {
            olevelKey: validate.olevelKey,
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
  function toUpdateoreportdetail(body) {
    let d = new Date(), result={};
    if (result) {
      {
          result.id = body.id,
          result.OtableauposteKey= body.OtableauposteKey,
          result.OreferenceKey= body.OreferenceKey,
          result.olevelKey= body.olevelKey,
          result.SortOrder= body.SortOrder,
          result.ModifiedOn = d;
      }
    }
    return result;
  }
  function toinit() {
    return {
      modelObject:modelObject,
      oreportDetailClass:oreportDetailClass,
      toOreportDetail: toOreportDetail,
      togetoreportdetail: togetoreportdetail,
      getObjoreportdetail: getObjoreportdetail,
      toUpdateoreportdetail:toUpdateoreportdetail
    };
  }
  return {
    toinit: toinit
  };

})();
module.exports = {
  toinit: staticOreportdetail.toinit
};

