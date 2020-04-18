const {arruserdata,objuserdata}=require('../testing/data/userdata').toinit();
const {User}=require('../omodels/modelsSchema/user').toinit();
const {toUser}=require('../features/user/staticUser').toinit();
const {toapicreateinstance} = require('../sharedkernel/odainstance/toOdaInstance').toinit();
const {toInitializeInstance} = require('../sharedkernel/odainstance/toInitializeInstance').toinit();
const {getapistreamdata$,getapiObserver, getapiCreateObserver,getapidata}=require('../sharedkernel/odaSubscribe').toinit();

const {getall,index$} = require('../features/user/index').toinit();
//const {toseedarray, getAll, getusers$, result$} = require('./index').toinit();
require('../config/ohadb').connectserver();
const getdata= index$;
let result;
   getapistreamdata$(getdata).subscribe(console.log(getapidata())

  );


/*
getall(function(err,data){
  if(err) console.log(err)
console.log(data);
}) */
// console.log(toInitializeInstance(User,objuserdata()))
/*
const odagetObserver = function () {
  return {
    next: x => console.log(x),
    error: err => console.error('Observer got an error: ' + err),
    complete: () => {
      console.log('Observer got a complete notification');
    }
  };
}; */
