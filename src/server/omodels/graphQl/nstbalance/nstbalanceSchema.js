const nstbalanceSchema = (function () {
  function toinit() {
    return {
      nstBalanceType: nstBalanceType,
    }
  }
  return {
    toinit: toinit
  }
})()
module.exports = {
  toinit: nstbalanceSchema.toinit
}
