const oexerccomptadata = (function () {

  const arroexerccomptadata = function () {
      return [ {
        "oExercComptaId": "1900"
    },
    {
      "oExercComptaId": 2006
  }
      ];
  }

  const objoexerccomptadata = function () {
      return {
        "oExercComptaId": 2006

      };
  }

  function toinit() {
      return {
          arroexerccomptadata: arroexerccomptadata,
          objoexerccomptadata: objoexerccomptadata
      }
  }
  return {
      toinit: toinit
  }
})();
module.exports = {
  toinit: oexerccomptadata.toinit
}
