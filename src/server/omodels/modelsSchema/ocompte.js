const mongoose = require('mongoose'),
Schema = mongoose.Schema;
const {getauditentity, gettoObject ,extendSchema, auditEntityPlugin} = require('../helpers/odabaseSchema').toinit();
const {OcompteClass, ocompteObj}=require('../modelsClass/OcompteClass').toinit();

const ocompte= (function(){
  const auditBaseSchema = new Schema(getauditentity,gettoObject);
  const ocompteschema = extendSchema(auditBaseSchema, ocompteObj);
  ocompteschema.loadClass(OcompteClass);
  ocompteschema.plugin(auditEntityPlugin);
  ocompteschema.set('toObject', {
    getters: true
  });
  ocompteschema.set('toJSON', {
    getters: true
  });
  ocompteschema.index({
    CompteNumber: 1
  });
  let Ocompte = mongoose.model('Ocompte', ocompteschema);
  function toinit() {
    return {
      Ocompte: Ocompte    
    };
    }
   return {
    toinit: toinit
    };   
})();
  module.exports = {
    toinit: ocompte.toinit
    };

    require('../../config/ohadb').connectserver();
const obj = {
  CompteNumber: '485'
}
// ocompte.toinit().Ocompte.create(obj);
// const obj={ CompteNumber: '86'}
/*  var small = new ocompte.toinit().Ocompte(obj);
small.save(function (err) {
if (err) return handleError(err);
// saved!
});  */ 
ocompte.toinit().Ocompte.find({}, function (err, data) {
  if (err)
    throw err;
  console.log(data);
});
 