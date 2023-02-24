// Leggo e salvo il riferimento al contenitore centrale del documento
let gameTableEl = document.getElementById("game-table");
console.log(gameTableEl);

// Avvio un ciclo da i = 1 a i = 100 che aggiunga uno "square" ad ogni iterazione
for(let i = 1; i <= 100; i++) {
    let squareEl = document.createElement("div");
    console.log(squareEl);

    // Assegno in ogni caso la classe square che dà dimensioni e background standard all'elemento
    squareEl.classList.add("square");

    // Controllo se i è:
    //  - buzzfizz(multiplo di 3 e di 5) -> assegno all'elemento i-esimo la sia la classe fizz che buzz
    //      e ci inserisco la parola "fizzbuzz"
    //  - fizz(multiplo di 3) -> assegno all'elemento i-esimo la classe fizz
    //      e ci inserisco la parola "fizz"
    //  - buzz(multiplo di 5) -> assegno all'elemento i-esimo la classe buzz
    //      e ci inserisco la parola "buzz"
    //  - nessuna delle precedente -> inserisco solo i all'interno dell'elemento i-esimo
    if(i % 3 == 0 && i % 5 == 0) {
        squareEl.classList.add("fizz", "buzz");
        squareEl.innerText = "fizzbuzz";
    }
    else if (i % 3 == 0) {
        squareEl.classList.add("fizz");
        squareEl.innerText = "fizz";
    }
    else if(i % 5 == 0) {
        squareEl.classList.add("buzz");
        squareEl.innerText = "buzz";
    }
    else {
        squareEl.innerText = i;
    }

    // Inserisco lo "square" appena creato all'interno del gameTable
    gameTableEl.append(squareEl);
}