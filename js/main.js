/* chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65. */


// chiedere nome e cognome
let name = document.getElementById("name");

console.log(name)

//chiedere numero di km
let km = document.getElementById("km");

console.log(km);

//chiedere età
let age = document.getElementById("age");
console.log(age);


// calcolo perzzo biglietto per intero
const costoBiglietto = 0.21;
let prezzo = costoBiglietto * km;
console.log(prezzo);

//applicazione sconto
let tot;
let sconto;

// sconto per minorenni
if(age < 18){
    sconto = (prezzo / 100) * 20;
    tot = prezzo - sconto;
}else if(age > 65){
    sconto = (prezzo / 100) * 40;
    tot = prezzo - sconto;
}else{
    tot =  prezzo;
}

let element = document.getElementById("generate");
element.addEventListener(`click`, 

    function() {
        document.getElementById("price").innerHTML = `${tot.toFixed(2)}€`;
    }
    
);                                               


//output
