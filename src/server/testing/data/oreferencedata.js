
const oreferencedata = (function () {

  const arroreferencedata = [
    {
      "RefCode": "unk",
      "Description": "unknown",
      "ocomptes": [{
        "CompteNumber": "000"
  
      }]
  
    },
  
    {
      "RefCode": "AC",
      "Description": "Primes de remboursement des obligations",
      "ocomptes": [{
        "CompteNumber": "206"
  
      }]
  
    }
  ];

  const objoreferencedata ={
		"RefCode": "AE",
		"Description": "Frais de recherche et de développement",
		"ocomptes": [{
			"CompteNumber": "211"
		},
		{
			"CompteNumber": "2191"


		},

		{
			"CompteNumber": "2811"


		},
		{
			"CompteNumber": "2919"


		}]
	}
  function toinit() {
      return {
          arroreferencedata: arroreferencedata,
          objoreferencedata: objoreferencedata
      }
  }
  return {
      toinit: toinit
  }
})();
module.exports = {
  toinit: oreferencedata.toinit
}
