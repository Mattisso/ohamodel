const mongoose = require('mongoose'),
Schema = mongoose.Schema;
const { getauditentity, gettoObject, extendSchema, auditEntityPlugin} = require('../helpers/odabaseSchema').toinit();
const {initObjOreference,oreferenceClass}=require('../staticModels/staticOreference').toinit();

const oreference = (function () {
  const auditBaseSchema = new Schema(getauditentity, gettoObject);
  const oReferenceSchema = extendSchema(auditBaseSchema, initObjOreference);
 
  oReferenceSchema.loadClass(oreferenceClass);
  oReferenceSchema.plugin(auditEntityPlugin);
  oReferenceSchema.index({
    RefCode: 1
    //	ocomptes: 1
  });
  oReferenceSchema.virtual('fullDescription')
  .get(function () {
    return this.RefCode + ' - ' + this.Description;
  }).set(function (v) {
    this.RefCode = v.substr(0,
        v.indexOf(''));
    this.Description = v.substr(v.indexOf('') + 1);
  });
  oReferenceSchema.virtual('ocompte')
.set(function(ocompte){
	this._ocompte = ocompte;
})
.get(function() {
	return this._ocompte;
});
  let  oReference = mongoose.model('oReference', oReferenceSchema);
  function toinit() {
    return {
      oReference: oReference
    };
  }
  return {
    toinit: toinit
  };
})();
module.exports = {
  toinit: oreference.toinit
};

require('../../config/ohadb').connectserver();
const obj = {
  "RefCode": "AC",
  "Description": "Primes de remboursement des obligations"
  }
/*   oreference.toinit().oReference.create(obj); */
// const obj={ CompteNumber: '86'}
/*   var small = new oreference.toinit().oReference(obj);
small.save(function (err) {
if (err) return handleError(err);
// saved!
});  */
oreference.toinit().oReference.find({}, function (err, data) {
  if (err)
    throw err;
  console.log(data);
});

