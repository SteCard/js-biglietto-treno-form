// FUNZIONE CHE GENERA I DATI AL CLICK DEL PULSANTE
var generateButton = document.getElementById("generate");

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
    var carriageNumber = Math.floor((Math.random() * 10) + 1);
    var min = 90000;
    var max = 100000;
    var discountCode = Math.floor(Math.random() * (max - min) ) + min;
    

    // DETTAGLI BIGLIETTO
    document.getElementById('passenger_name').innerHTML = name;

    document.getElementById('discount_name').innerHTML = offerName;
    document.getElementById('carriage').innerHTML = carriageNumber;
    document.getElementById('discount_code').innerHTML = discountCode;
    document.getElementById('final_price').innerHTML = finalPrice.toFixed(2) + ' €';

    // dettagli biglietto al click del pulsante
    document.getElementById('detail_box').className = 'show';
});

