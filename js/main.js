/* chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65. */


let element = document.getElementById("generate");
element.addEventListener(`click`, 

    function() {

        // richiede nome e cognome
        let nome = document.getElementById("nome").value;

        // richiede km
        let km = document.getElementById("km").value;

        // richiede età
        let age = document.getElementById("age").value;

        // prezzo biglietto
        let prezzo = 0.21 * km;
        console.log(prezzo);
        let tot;
        let sconto;
        if(age === "minorenne"){
            sconto = (prezzo / 100) * 20;
            tot = prezzo - sconto;
            console.log(tot);
            // offerta
            document.getElementById("offer").innerHTML = `Sconto del 20%`
        } else if(age === "senior"){
            sconto = (prezzo / 100) * 40;
            tot = prezzo - sconto;
            console.log(tot);
            // offerta
            document.getElementById("offer").innerHTML = `Sconto del 40%`
        } else{
            tot =  prezzo;
            console.log(tot);
            document.getElementById("offer").innerHTML = `Nessuno sconto applicabile`
        }
        document.getElementById("price").innerHTML = `${tot.toFixed(2)}€`;

        // nome passeggero su ticket
        document.getElementById("namePassenger").innerHTML = nome;

        // numero carrozza
        document.getElementById("numCarr").innerHTML = Math.floor(Math.random() * 10) + 1;

        // codice CP
        document.getElementById("CP").innerHTML = Math.floor(Math.random() * 100000) + 1;

        // apparizione secondo biglietto
        const yourTicket = document.getElementById("boxOutput");
        yourTicket.style.display = "block";

        // rimozione margin
        document.getElementById("container").style.margin = "0 auto";
    }    

);                                               

// button reset
let elementReset = document.getElementById("reset");
elementReset.addEventListener(`click`,
    function(){
        document.getElementById("infoBlock").reset();
        const yourTicket = document.getElementById("boxOutput");
        yourTicket.style.display = "none";
    }
);
