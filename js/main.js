/* chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65. */


let element = document.getElementById("generate");
element.addEventListener(`click`, 

    function() {
        let name = document.getElementById("name").value;
        let km = document.getElementById("km").value;
        let age = document.getElementById("age").value;
        let prezzo = 0.21 * km;
        console.log(prezzo);
        let tot;
        let sconto;
        if(age < 18){
            sconto = (prezzo / 100) * 20;
            tot = prezzo - sconto;
            console.log(tot);
        } else if(age > 65){
            sconto = (prezzo / 100) * 40;
            console.log(tot);
            tot = prezzo - sconto;
        } else{
            console.log(tot);
            tot =  prezzo;
        }
        document.getElementById("price").innerHTML = `${tot.toFixed(2)}€`;
    }
    
);                                               


//output
