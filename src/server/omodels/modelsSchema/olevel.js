"use strict";
const mongoose = require('mongoose'),
Schema = mongoose.Schema;
const {getauditentity,gettoObject, extendSchema, auditEntityPlugin} = require('../helpers/odabaseSchema').toinit();
const {olevelClass, modelObject}=require('../staticModels/staticOlevel').toinit();

const olevel = (function () {

  const auditBaseSchema = new Schema(getauditentity, gettoObject);
  const olevelSchema = extendSchema(auditBaseSchema, modelObject);

  olevelSchema.loadClass(olevelClass);
  olevelSchema.plugin(auditEntityPlugin);
 
  olevelSchema.index({
    olevelNum: 1
  });

  let Olevel = mongoose.model('Olevel', olevelSchema)
  function toinit() {
    return {
      Olevel: Olevel
    }
  };
  return {
    toinit: toinit
  };
})();
module.exports = {
  toinit: olevel.toinit
};

require('../../config/ohadb').connectserver();
const obj = {
	"olevelNum": "1",
	"olevelDescption": "Grand Total Reference Level 1"
}

// olevel.toinit().Olevel.create(obj);
// const obj={ olevelNum: '86'}
/*   var small = olevel.toinit().Olevel(obj);
small.save(function (err) {
if (err) return handleError(err);
// saved!
}); */ 
olevel.toinit().Olevel.find({}, function (err, data) {
  if (err)
    throw err;
  console.log(data);
});
