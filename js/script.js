// km
let km = prompt ('inserisci km')

// età
let eta = prompt ('inserisci età')

//  prezzo
let prezzo = 0.21 * km

// dichiaro una variabile da mostrare
let output

if(eta < 18){
    let sconto = prezzo * 20 / 100;
    prezzo = prezzo - sconto; // prezzo -= sconto (è la stessa cosa)
    /* prezzo = prezzo * 80 / 100
    prezzo *= 0.8; (stesso risultato) */

    console.log(sconto);
    console.log(prezzo)

    output = `Hai diritto ad uno sconto del 20%. Il prezzo del biglietto è di: ${prezzo.toFixed(2)}€`

}

else if(eta > 65){
    let sconto = prezzo * 40 / 100;
    // prezzo -= sconto
    prezzo *= 0.6;
    console.log(prezzo);

    output = `Hai diritto ad uno sconto del 40%. Il prezzo del biglietto è di: ${prezzo.toFixed(2)}€`
}

else{
    output = `Il prezzo del biglietto è di: ${prezzo.toFixed(2)}€`
}

// mostro prezzo finale
document.getElementById('output').innerHTML = output;