class Atslegvards {
   constructor(vards, skaits){
      this._vards = vards;
      this._skaits = skaits;
   }
   get vards(){ return this._vards; }
   get skaits(){ return this._skaits; }
   set skaits(value) { this._skaits = value; }
}

fetch("informacija.txt")    
   .then(function (response){
      return response.text();
   })    
   .then(function (data){
      const Data = data.toLowerCase().replace(/[^a-zāčēģīķļņōŗšūž\s]/g, '');
      let vardi = Data.split(/\s+/);
      if(vardi.length >= 4){
         let atslegvardi = [];
         vardi.forEach(word => {
            let atslegvards = atslegvardi.find(a => a.vards === word);
            if(atslegvards){
               atslegvards.skaits++;
            } else {
               atslegvardi.push(new Atslegvards(word, 1));
            }
         });
         atslegvardi.sort((a, b) => b.skaits - a.skaits);
         const out = document.getElementById("out"); 
         out.innerHTML = '<p>Automātiskie noteiktiedziesmas "Cielaviņas" atslēgas vārdi:</p>';
         const list = document.getElementById("list");
         atslegvardi.slice(0, 5).forEach(function(atslegvards){
            const listItem = document.createElement('li');
            listItem.textContent = `${atslegvards.vards} (${atslegvards.skaits} reizes)`;
            list.appendChild(listItem);
         });
      }
   });