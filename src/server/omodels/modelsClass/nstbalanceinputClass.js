'use strict'

const nstbalanceinputClass = (function () {

  class nstbalanceinputClass {
    constructor() {}
  }
  function toinit() {
    return {
      nstbalanceinputClass: nstbalanceinputClass
    };
  }
  return {
    toinit: toinit
  };
})();
module.exports = {
  toinit: nstbalanceinputClass.toinit
};
