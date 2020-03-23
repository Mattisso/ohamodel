
const {toapicreateinstance}=require('../sharedkernel/odainstance/toOdaInstance').toinit()
const {objocomptedata,arrocomptedata}=require('../testing/data/ocomptedata').toinit();
const {oCompte}=require('../omodels/modelsSchema/index').toinit();
const {render}=require('../features/ocompte/ocompteView').toinit();

const {Buildocompte}=require('../omodels/modelClass/ocompteClass').toinit();
// const {nttCompteBalance}=require('../omodels/modelsSchema/index').toinit();

// require('../config/ohadb').connectserver()

// const data =Buildocompte(oCompte,objocomptedata)
// JSON.stringify(toInitializeInstance(nttCompteBalance,createData)));
// console.log(data.getData);

 const data= toapicreateinstance(oCompte,arrocomptedata);
console.log(render(data));