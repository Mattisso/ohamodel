const {arruserdata,objuserdata}=require('../testing/data/userdata').toinit();
const {User}=require('../omodels/modelsSchema/user').toinit();
const {toUser}=require('../features/user/staticUser').toinit();
const {toapicreateinstance} = require('../sharedkernel/odainstance/toOdaInstance').toinit();
const {toInitializeInstance} = require('../sharedkernel/odainstance/toInitializeInstance').toinit();

const {toseedarray} = require('../features/user/userSeed').toinit();
//const {toseedarray, getAll, getusers$, result$} = require('./index').toinit();

console.log((toseedarray));
// console.log(toInitializeInstance(User,objuserdata()))

