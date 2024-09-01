function sajaukt(){
  let vards = document.getElementById("Ievade").value;
  let sajaukts = "";
  while(vards.length > 0){
    let random = Math.floor(Math.random() * vards.length);
    sajaukts += vards[random];
    vards = vards.slice(0, random) + vards.slice(random+1);
  }
  document.getElementById("Rezultats").innerText = sajaukts;
}