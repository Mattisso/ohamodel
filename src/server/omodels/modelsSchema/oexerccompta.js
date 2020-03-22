const mongoose = require('mongoose'),
Schema = mongoose.Schema;
const { getauditentity,gettoObject, extendSchema, auditEntityPlugin} = require('../helpers/odabaseSchema').toinit();
const {oExercComptalass, initObject}=require('../staticModels/staticOxerccompta').toinit();
const oexerccompta = (function () {

  const auditBaseSchema = new Schema(getauditentity, gettoObject);
  const oexerccomptaschema = extendSchema(auditBaseSchema, initObject);

  oexerccomptaschema.loadClass(oExercComptalass);
  oexerccomptaschema.plugin(auditEntityPlugin);
  oexerccomptaschema.index({
    oExercComptaId: 1
  });
  let oExercCompta = mongoose.model('oExercCompta', oexerccomptaschema);
  function toinit() {
    return {
      oExercCompta: oExercCompta
    };
  }
  return {
    toinit: toinit
  };
})();
module.exports = {
  toinit: oexerccompta.toinit
};
// require('../../config/ohadb').connectserver();

const obj = {
  oExercComptaId: '2006'
}
// oexerccompta.toinit().oExercCompta.create(obj);
/* // const obj={ oExercComptaId: '86'}
 let small = new oexerccompta.toinit().oExercCompta(obj);
small.save(function (err) {
  if (err)
    return handleError(err);
  // saved!
}); */ 
/* oexerccompta.toinit().oExercCompta.find({}, function (err, data) {
  if (err)
    throw err;
  console.log(data);
});  */
