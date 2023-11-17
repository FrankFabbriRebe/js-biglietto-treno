11/* 
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
*/

// prompt chilomentri del viaggio
const kmViaggio = parseInt(prompt("Qaunti chilomentri sarà lungo il tuo viaggio?"));
// console.log("km del viaggio:", kmViaggio);

// prompt età passegiero
const etaPassegero = parseInt(prompt("Qaunti anni hai?"));
// console.log("età passegero:", etaPassegero);

// calcolo costo biglietto senza sconti
const costoBigliettoIniziale = kmViaggio * 0.21;
// console.log("costo del biglietto senza sconti:", costoBigliettoIniziale,"€");

// calcolo sconto 20%
const scontoVenti = (costoBigliettoIniziale * 20 / 100).toFixed(2);
// console.log("questo è lo sconto del 20%:",scontoVenti,"€");

// calcolo sconto 40%
const scontoQuaranta = (costoBigliettoIniziale * 40 / 100).toFixed(2);
// console.log("questo è lo sconto del 40%:", scontoQuaranta,"€");

// applicazione sconti
if (etaPassegero < 18) {
    let costoBigliettoFinale = (costoBigliettoIniziale - scontoVenti).toFixed(2);
    document.getElementById("biglietto").innerHTML = `Ciao, avendo meno di 18 anni hai diritto ad uno sconto del 20%, in questo caso pari a ${scontoVenti}€. Il prezzo finale del tuo biglietto sarà quindi di ${costoBigliettoFinale} €`;
    // console.log("questo è il prezzo finale del biglietto:",costoBigliettoFinale,"€");
} else if (etaPassegero >= 65) {
    let costoBigliettoFinale = (costoBigliettoIniziale - scontoQuaranta).toFixed(2);
    document.getElementById("biglietto").innerHTML = `Ciao, avendo più di 65 anni hai diritto ad uno sconto del 40%, in questo caso pari a ${scontoQuaranta}€. Il prezzo finale del tuo biglietto sarà quindi di ${costoBigliettoFinale} €`;
    // console.log("questo è il prezzo finale del biglietto:",costoBigliettoFinale,"€");
} else {
    let costoBigliettoFinale = costoBigliettoIniziale;
    document.getElementById("biglietto").innerHTML = `Ciao, purtroppo per la tua fascia di età non hai diritto a nessuno sconto. Il prezzo finale del tuo biglietto sarà quindi di ${costoBigliettoFinale} €`;
    // console.log("questo è il prezzo finale del biglietto:",costoBigliettoFinale,"€");
}
