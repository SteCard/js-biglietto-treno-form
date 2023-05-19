"use strict";

// FUNZIONE CHE GENERA I DATI AL CLICK DEL PULSANTE
let generateButton = document.getElementById("generate");

generateButton.addEventListener("click", function() {

    // Input da inserire
    name = document.getElementById('name').value;
    km = document.getElementById('km').value;
    age = document.getElementById('age').value;

    // Calcolo prezzo base
    basePrice = km * 0.21;

    // Sconto UNDER 18
    discount1 = basePrice - (basePrice * 0.2);
    // Sconto OVER 65
    discount2 = basePrice - (basePrice * 0.4);

    offerName = 'Biglietto Standard';

    // Condizione sconto
    if (age == 'under18') {
        finalPrice = discount1;
        offerName = 'Sconto Under18';
    } else if (age == 'over65') {
        finalPrice = discount2;
        offerName = 'Sconto Over65';
    } else {
        finalPrice = basePrice;
    }

    // VARIABILI PER NUMERI RANDOM
    let carriageNumber = Math.floor((Math.random() * 10) + 1);
    let min = 90000;
    let max = 100000;
    let discountCode = Math.floor(Math.random() * (max - min) ) + min;
    

    // DETTAGLI BIGLIETTO
    document.getElementById('passenger_name').innerHTML = name;

    document.getElementById('discount_name').innerHTML = offerName;
    document.getElementById('carriage').innerHTML = carriageNumber;
    document.getElementById('discount_code').innerHTML = discountCode;
    document.getElementById('final_price').innerHTML = finalPrice.toFixed(2) + ' €';

    // dettagli biglietto al click del pulsante
    document.getElementById('detail_box').className = 'show';
});

// FUNZIONE CHE CANCELLA I DATI AL CLICK DEL PULSANTE
let eraseButton = document.getElementById("erase");

eraseButton.addEventListener("click", function() {
    document.getElementById('name').value = '';
    document.getElementById('km').value = '';
    document.getElementById('age').value = '';

    document.getElementById('passenger_name').innerHTML = '';

    document.getElementById('discount_name').innerHTML = '';
    document.getElementById('carriage').innerHTML = '';
    document.getElementById('discount_code').innerHTML = '';
    document.getElementById('final_price').innerHTML = '';

    // Funzione per nascondere i dettagli del biglietto al click del pulsante
    document.getElementById('detail_box').className = 'hidden';
});

