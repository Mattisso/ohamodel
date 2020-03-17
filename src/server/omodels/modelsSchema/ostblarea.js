const mongoose = require('mongoose'),
Schema = mongoose.Schema;
const {getauditentity, gettoObject ,extendSchema, auditEntityPlugin} = require('../helpers/odabaseSchema').toinit();
const {ostblareaClass, modelObject}=require('../staticModels/staticOstblarea').toinit()

const ostblarea=(function(){
	const auditBaseSchema = new Schema(getauditentity,gettoObject);
const oStblAreaSchema = extendSchema(auditBaseSchema, modelObject);
oStblAreaSchema.loadClass(ostblareaClass);
oStblAreaSchema.plugin(auditEntityPlugin);
oStblAreaSchema.index({AreaShortName:1});

oStblAreaSchema.virtual('suboreferences', {
	ref: 'oReference', // The model to use
	localField: 'oreferences', // Find people where `localField`
	foreignField: '_id', // is equal to `foreignField`
	// If `justOne` is true, 'members' will be a single doc as opposed to
	// an array. `justOne` is false by default.
	justOne: false
  });

  oStblAreaSchema.virtual('ostableauposte')
  .set(function(ostableauposte){
	this.OstableauposteKey = ostableauposte;
	}).get(function() {
	return this.OstableauposteKey;
	});

  oStblAreaSchema.virtual('ocompte')
  .set(function(ocompte){
    this._ocompte= ocompte;
  })
  .get(function() {
    return this._ocompte;
  });
  let  oStblArea = mongoose.model('oStblArea', oStblAreaSchema);
function toinit() {
	return {
		oStblArea:oStblArea
	}
}
return {
	toinit:toinit
}

})()
module.exports = {
    toinit: ostblarea.toinit
    };
