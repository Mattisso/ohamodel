const {arruserdata,objuserdata}=require('../testing/data/userdata').toinit();
const {User}=require('../omodels/modelsSchema/user').toinit();
const {toUser}=require('../omodels/staticModels/staticUser').toinit();
const {tocreateinstance} = require('../sharedkernel/odainstance/toOdaInstance').toinit();


console.log(tocreateinstance(User,objuserdata()))

