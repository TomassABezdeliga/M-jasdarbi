class Dators{
  constructor(veids, modelis, cena){
    this.veids = veids;
    this.modelis = modelis;
    this.cena = cena;
  }
}

class DatoruSaraksts{
  constructor(){
    this.datori = [];
    this.labojumi = -1;
  }
  jaunsObj(dators){
    if(this.apstiprinajums(dators)){
      this.datori.push(dators);
      this.refreshTabulu();
      this.refreshForm();
    }else{
      alert("Nav ievadīti visi lauki! Lūdzu, ievadiet visus laukus!");
    }
  }
  apstiprinajums(dators){
    return dators.veids != "" && dators.modelis != "" && dators.cena != "";
  }
  mainitObj(dators){
    if(this.labojums >= 0 && this.apstiprinajums(dators)){
      this.datori[this.labojums] = dators;
      this.refreshTabulu();
      this.refreshForm();
      this.labojums = -1;
    }else{
      alert("Lūdzu, izvēlaties sastāvdaļu, kuru vēlaties labot!");
    }
  }
  labotObj(index){
    const dators = this.datori[index];
    document.getElementById("veids").value = dators.veids;
    document.getElementById("modelis").value = dators.modelis;
    document.getElementById("cena").value = dators.cena;
    this.labojums = index;
  }
  izdzestObj(index){
    this.datori.splice(index, 1);
    this.refreshTabulu();
  } 
  refreshTabulu(){
    const tabula = document.getElementById("tabula").getElementsByTagName("tbody")[0];
    tabula.innerHTML = "";
    this.datori.forEach(function(dators, index){
      const rinda = tabula.insertRow();
      rinda.insertCell(0).textContent = dators.veids;
      rinda.insertCell(1).textContent = dators.modelis;
      rinda.insertCell(2).textContent = dators.cena;
      const jaunaCell = rinda.insertCell(3);
      const labotPoga = document.createElement("button");
      labotPoga.textContent = "Labot";
      labotPoga.onclick = function(){
        this.labotObj(index);
      }
      jaunaCell.appendChild(labotPoga);
      const dzestPoga = document.createElement("button");
      dzestPoga.textContent = "Dzēst";
      dzestPoga.onclick = function(){
        this.izdzestObj(index);
      }
      jaunaCell.appendChild(dzestPoga);
    }) 
  }
  refreshForm(){
    document.getElementById("veids").value = "";
    document.getElementById("modelis").value = "";
    document.getElementById("cena").value = "";
  }
}

const datoruSaraksts = new DatoruSaraksts();

function jaunsObj(){
  const veids = document.getElementById("veids").value;
  const modelis = document.getElementById("modelis").value;
  const cena = document.getElementById("cena").value;
  const dators = new Dators(veids, modelis, cena);
  datoruSaraksts.jaunsObj(dators);
}

function mainitObj(){
  const veids = document.getElementById("veids").value;
  const modelis = document.getElementById("modelis").value;
  const cena = document.getElementById("cena").value;
  const dators = new Dators(veids, modelis, cena);
  datoruSaraksts.mainitObj(dators);
}

function labotObj(){
  const veids = document.getElementById("veids").value;
  const modelis = document.getElementById("modelis").value;
  const cena = document.getElementById("cena").value;
  const dators = new Dators(veids, modelis, cena);
  datoruSaraksts.labotObj(dators);
}

function izdzestObj(){
  const veids = document.getElementById("veids").value;
  const modelis = document.getElementById("modelis").value;
  const cena = document.getElementById("cena").value;
  const dators = new Dators(veids, modelis, cena);
  datoruSaraksts.izdzestObj(dators);
}