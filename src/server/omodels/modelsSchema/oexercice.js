const mongoose = require('mongoose'),
Schema = mongoose.Schema;
const {getauditentity, gettoObject ,extendSchema, auditEntityPlugin} = require('../helpers/odabaseSchema').toinit();
const {oExerciceClass,initObjOexcerice}=require('../staticModels/StaticOexercice').toinit();

const oexercice= (function(){
  const auditBaseSchema = new Schema(getauditentity,gettoObject);
  const oexerciceschema = extendSchema(auditBaseSchema, initObjOexcerice);

  oexerciceschema.loadClass(oExerciceClass);
  oexerciceschema.plugin(auditEntityPlugin);
  oexerciceschema.index({
    oExerciceEncour: 1
  });
  let oExercice = mongoose.model('oExercice', oexerciceschema);
  function toinit() {
    return {
      oExercice: oExercice    
    };
    }
   return {
    toinit: toinit
    };   
})();
  module.exports = {
    toinit: oexercice.toinit
    };

  //  require('../../config/ohadb').connectserver();
const obj = {
  oExerciceEncour: '2000'
}
// oexercice.toinit().oExercice.create(obj);
// const obj={ oExerciceEncour: '86'}
/*   var small = new oExercice(obj);
small.save(function (err) {
if (err) return handleError(err);
// saved!
}); */
/*oexercice.toinit().oExercice.find({}, function (err, data) {
  if (err)
    throw err;
  console.log(data);
});*/
 