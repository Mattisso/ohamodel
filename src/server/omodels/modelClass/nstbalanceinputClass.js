"use strict"
const {replaceString}= require('../helpers/utils').toinit();
const {getTotalCount, getTotalSoldedebit, getTotalSoldecredit}=require('../../SharedKernel/odaStats').toinit();

const nstbalanceinputClass =(function(){
/*   let arrbalanceinputs =[];
 */
  class nstbalanceinputClass {

    constructor(NumCompte, IntitulCompte, SoldeCredit, SoldeDebit) {
      this._NumCompte = NumCompte;
      this._IntitulCompte = IntitulCompte;
      this._SoldeCredit = SoldeCredit;
      this._SoldeDebit = SoldeDebit;   
    }
    get numcompte() {
      this._NumCompte;
    }
    set numcompte(NumCompte) {
      this._NumCompte = NumCompte;
      return this;
    }
    get intitulcompte() {
      this._IntitulCompte;
    }
    set intitulcompte(IntitulCompte) {
      this._IntitulCompte = IntitulCompte;
      return this;
    }
    get soldecredit() {
      this._SoldeCredit;
    }
    set soldecredit(SoldeCredit) {
      this._SoldeCredit = SoldeCredit;
      return this;
    }
    get comptenumber() {
      this._CompteNumber;
    }
    set comptenumber(CompteNumber) {
      this._CompteNumber = CompteNumber;
      return this;
    }
    get soldedebit() {
      this._SoldeDebit;
    }
    set soldedebit(SoldeDebit) {
      this._SoldeDebit = SoldeDebit;
      return this;
    }  
    
    get  CompteNumber() {
      return  replaceString(this.NumCompte);
    }   
    set CompteNumber(v)  {    
      this._comptenumber =replaceString(v);
      return this;
    }

     AddbalancesheetData(obj) {
       
   arrbalanceinputs.push(
      {
        "NumCompte" : obj.numcompte,
        "IntitulCompte": obj.intitulcompte,
        "SoldeDebit": obj.soldedebit,
        "SoldeCredit": obj.soldedebit,
        "CompteNumber":obj.CompteNumber
    
    
      });
    return   {
       'totalSoldeDebit': getTotalSoldedebit(this.arrbalanceinputs), 
      'totalSoldeCredit': getTotalSoldecredit( this.arrbalanceinputs),
      'DetailCount': getTotalCount(odaremoveDupnumcompte(this.arrbalanceinputs)), 
      'arrbalanceinputs': odaremoveDupnumcompte(arrbalanceinputs.slice()) 
      }
      
  }
 
  getData() {
    return {
      'totalSoldeDebit':  this.totalSoldeDebit,//getTotalSoldedebit(this.arrbalanceinputs), 
      'totalSoldeCredit':  this.totalSoldeCredit,//getTotalSoldecredit( this.arrbalanceinputs),
      'DetailCount':  this.DetailCount, //getTotalCount(odaremoveDupnumcompte(this.arrbalanceinputs)), 
      'arrbalanceinputs': this.arrbalanceinputs //odaremoveDupnumcompte(arrbalanceinputs.slice()) 
    }
  } 
} 
function toinit(){
  return {
    nstbalanceinputClass: nstbalanceinputClass
  }
}
return {
  toinit:toinit
}
})()
module.exports={
  toinit:nstbalanceinputClass.toinit
}