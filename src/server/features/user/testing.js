
const _ = require('lodash');
const fs = require("fs");
const path = require('path');
const outdirname = path.join(__dirname, '../../DataService/data//source/data.json');
const  callbackdirname = path.join(__dirname, '../../DataService/data/source/callbackdata.json');
// var nstbalancedata=require('../load/nstbalance/nstbalancedata');
// var nstbalancedata=require('../load/nstbalance/nstbalancedata');

require('../../config/ohadb').connectserver();
const { combineLatest, Observable, of, pipe, from } = require('rxjs');
const { filter, map, tap, pluck, take, find, distinct, shareReplay } = require('rxjs/operators');
// const {combinedSeedata$} = require('./ostblareaRepository').toinit();
const {toseedarray} = require('./userRepository').toinit();
//const {toseedarray, getAll, getusers$, result$} = require('./index').toinit();

console.log(JSON.stringify(toseedarray));


// const getoreportdetail$= sharedrepository.getocomptreferences$;
 //const getcallbackdata = ostblareaRepository.index;
//  const getoreportdetail$ = olevelRepository.getolevelsBy$(3);
/* const getoreportdetail$ = getusers$;
console.log(toseedarray);

getAll(function(err,data){
  if(err) {
    console.log(err);
  }
else {

 setTimeout(() => {
   var filename = JSON.stringify(data);
//      callback(JSON.stringify(nttcomptebalances));


fs.writeFile(callbackdirname, filename, function (err) {
if (err) {
return console.error(err);
}

console.log('Data written successfully!');

});

 });
}
});

 const getObserverdata = pipe(
 map(n => n)
// ,tap(ev => console.log(ev))
 //,take(2)
);

const getoreportdetailR$ = getObserverdata(getoreportdetail$);

 getoreportdetailR$.subscribe(function (x) {
 var filename = JSON.stringify(x);
 //console.log(getodaAggreateData(x));
 fs.writeFile(outdirname, filename, function (err) {
   if (err) {
     return console.error(err);
   }
   console.log("Data written successfully!");
   process.exit(0);
 });

});

 */