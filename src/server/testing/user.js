const {arruserdata,objuserdata}=require('../testing/data/userdata').toinit();
const {User}=require('../omodels/modelsSchema/user').toinit();
//const {toUser}=require('../omodels/staticModels/staticUser').toinit();
const {toapicreateinstance} = require('../sharedkernel/odainstance/toOdaInstance').toinit();
const {toInitializeInstance} = require('../sharedkernel/odainstance/toInitializeInstance').toinit();


console.log(toInitializeInstance(User,objuserdata()))

