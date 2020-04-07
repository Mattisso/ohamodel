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


  const oexcomptadata=[
    {
      "_id" : "5e8a7e5e749f250cb89154f7",
      "isActive" : true,
      "Cloture" : true,
      "oExercComptaId" : "1900",
      "DateDebut" : "2020-04-06T00:57:02.466Z",
      "Datefin" : "2020-04-06T00:57:02.466Z",
      "CreatedOn" : "2020-04-06T00:57:02.466Z",
      "ModifiedOn" : "2020-04-06T00:57:02.466Z",
      "CreatedBy" : "Admin",
      "ModifiedBy" : "Admin",
      "__v" : 0
},
{
      "_id" : "5e8a7e5e749f250cb89154f8",
      "isActive" : true,
      "Cloture" : true,
      "oExercComptaId" : "2006",
      "DateDebut" : "2020-04-06T00:57:02.467Z",
      "Datefin" : "2020-04-06T00:57:02.467Z",
      "CreatedOn" : "2020-04-06T00:57:02.467Z",
      "ModifiedOn" : "2020-04-06T00:57:02.467Z",
      "CreatedBy" : "Admin",
      "ModifiedBy" : "Admin",
      "__v" : 0
}

]
  const objoexerccomptadata = function () {
      return {
        "oExercComptaId": 2006

      };
  }

  function toinit() {
      return {
          arroexerccomptadata: arroexerccomptadata(),
          objoexerccomptadata: objoexerccomptadata(),
          oexcomptadata:oexcomptadata
      }
  }
  return {
      toinit: toinit
  }
})();
module.exports = {
  toinit: oexerccomptadata.toinit
}
