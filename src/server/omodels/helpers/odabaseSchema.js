
'use strict';
// const _ = require('lodash');
let mongoose = require('mongoose');
//Schema = mongoose.Schema;
// const Schema = mongoose.Schema;
const odabaseSchema = (function () {
 const currentDate = new Date();
const extendSchema =  function(Schema, definition, options) {
return new mongoose.Schema(Object.assign({}, Schema.obj, definition), options);
}
const getauditentity = {
CreatedOn: {type: Date, default: Date.now },
CreatedBy: {type: String },
ModifiedOn: {type: Date,default: Date.now },
ModifiedBy: {type: String },
isActive: {type: Boolean, default:true }
}
const getbaseBalancesheet={    
        NumCompte: {type: String, required: true },
        IntitulCompte:{type: String, required: true },
        SoldeDebit: {type: Number, default:0},
        SoldeCredit: {type: Number, default:0 }
}
const gettoObject = {toObject: {
virtuals: true  },
toJSON: { virtuals:true }
    }

    const auditEntityPlugin= function (schema, options) {
    schema.set('toObject', {
        getters: true
        });
        schema.set('toJSON', {
        getters: true
        });
      //  let self = this;
    schema.pre(['save','create'], function(next) {        
        if (!this.CreatedOn)
        this.CreatedOn = currentDate;
    if (!this.ModifiedOn)
        this.ModifiedOn = currentDate;
    if (!this.CreatedBy)
        this.CreatedBy = 'Admin';
    if (!this.ModifiedBy)
        this.ModifiedBy = 'Admin';
    next();        
        });
    };


function toinit() {
return {
//auditBaseSchema: auditBaseSchema,
//balanceSheetBaseSchema: balanceSheetBaseSchema,
extendSchema: extendSchema,
getauditentity:getauditentity,
getbaseBalancesheet:getbaseBalancesheet,
gettoObject:gettoObject,
auditEntityPlugin:auditEntityPlugin
};
}
return {
toinit: toinit
};

})();
module.exports = {
toinit: odabaseSchema.toinit
};
