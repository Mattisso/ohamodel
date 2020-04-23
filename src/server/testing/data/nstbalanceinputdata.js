

"use strict";
const nstbalanceinputdata = (function () {
  const createData = {
    "NumCompte": "77777",
    "IntitulCompte": "efoe",
    "SoldeCredit": 44829579,
    "SoldeDebit": 0
  };
  const arrcreateData = [{
      "NumCompte": "102010",
      "IntitulCompte": "Dotation BENIN",
      "SoldeCredit": 44829579
    }, {
      "NumCompte": "102020",
      "IntitulCompte": "Dotation BURKINA",
      "SoldeCredit": 65643312
    }/* , {
      "NumCompte": "102040",
      "IntitulCompte": "Dotation CENTRAFRIQUE",
      "SoldeCredit": 41326938
    }, {
      "NumCompte": "102050",
      "IntitulCompte": "Dotation COTE D'IVOIRE",
      "SoldeCredit": 64842784
    }, {
      "NumCompte": "102060",
      "IntitulCompte": "Dotation GABON",
      "SoldeCredit": 64042255
    }, {
      "NumCompte": "102070",
      "IntitulCompte": "Dotation NIGER",
      "SoldeCredit": 41279251
    }, {
      "NumCompte": "102080",
      "IntitulCompte": "Dotation TOGO",
      "SoldeCredit": 57203109
    } */
  ];

  const editData = {
    "id": "5e9e454cafa98510c8aaed08",
    "NumCompte": "89999",
    "IntitulCompte": "cyrille",
    "SoldeCredit": 200988888,
    "SoldeDebit": 0,
    "CompteNumber": "1020",

  };
  function toinit() {
    return {
      createData: createData,
      editData: editData,
      arrcreateData:arrcreateData

    };
  }

  return {
    toinit: toinit
  };

})();
module.exports = {
  toinit: nstbalanceinputdata.toinit
};
