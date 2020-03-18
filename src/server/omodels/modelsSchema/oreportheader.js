const mongoose = require('mongoose'),
Schema = mongoose.Schema;
const {getauditentity, gettoObject ,extendSchema, auditEntityPlugin} = require('../helpers/odabaseSchema').toinit();
const {oreportHeaderClass, modelObject}=require('../staticModels/staticOreportheader').toinit()

c
const  oreportheader=(function(){

	const auditBaseSchema = new Schema(getauditentity, gettoObject);
	const oReportHeaderSchema = extendSchema(auditBaseSchema, modelObject);
	oReportHeaderSchema.loadClass(oreportHeaderClass);
	oReportHeaderSchema.plugin(auditEntityPlugin);
	oReportHeaderSchema.index(
		{
			OtableauposteKey: 1,
			OreferenceKey: 1
		}
	);
	
	oReportHeaderSchema.virtual('ocompte')
		.set(function (ocompte) {
			this._ocompte = ocompte;
		})
		.get(function () {
			return this._ocompte;
		});
	
	
	let oReportHeader = mongoose.model('oReportHeader', oReportHeaderSchema);	

	function toinit() {
		return {
			oReportHeader:oReportHeader
		}
	}
	return {
		toinit:toinit
	}
})();
model.exports={
	toinit:oreportheader.toinit()

}
