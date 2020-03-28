
"use strict"
const mongoose = require('mongoose'),
ObjectId = mongoose.SchemaTypes.ObjectId;
const oexerciceClass = (function () {
  const initObjOexcerice = {
    oExerciceEncour: {
      type: String
    },
    ExercicePrev: {
      type: String
    },
    OexercComptaKey: {
      type: ObjectId,
      ref: 'oExercCompta'
    },
    OexercComptaPrevKey: {
      type: ObjectId,
      ref: 'oExercCompta'
    },
    OexercComptaEncourKey: {
      type: ObjectId,
      ref: 'oExercCompta'
    }
  }

  class oExerciceClass {
    constructor(oExerciceEncour, ExercicePrev, OexercComptaKey, OexercComptaPrevKey, OexercComptaEncourKey) {
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
  function tonit() {
    return {
      initObjOexcerice: initObjOexcerice,
      oExerciceClass: oExerciceClass
    }
  }
  return {
    tonit: tonit
  }
})()
module.exports = {
  tonit: oexerciceClass.tonit
}
