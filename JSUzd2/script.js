fetch("dati.json")
.then(function (response) {
  return response.json();
})

.then(function(data){
  const valstis = data.valstis;
  let random = Math.floor(Math.random()*valstis.length);
  document.getElementById("valsts").innerHTML = valstis[random].toUpperCase();
})

.catch(error => {
  console.log('Kļūda: ', error);
})