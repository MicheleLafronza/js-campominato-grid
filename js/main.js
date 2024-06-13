// creo la costante bottone
const button = document.getElementById("play");

// creo la costante contenitore
const container = document.getElementById("contenitore");

// evento click pulsante gioca
button.addEventListener("click",

    function() {
        // aggiungo la classe container al contenitore per farlo comparire
        container.classList.add("container");


        // creo ciclo per far comparire tot elementi nel container
        for (let i=1; i <=100; i++) {

            // variabile con funzione che aggiunge elemento e classe
            boxDiv = newElementWithClass("div", "box");

            // aggiungo il numero dentro al div sempre con la stessa funzione
            boxNum = newElementWithClass("div", "number");

            // inserisco il div box nel container
            container.append(boxDiv);

            // inserisco il numero nel box
            boxDiv.append(boxNum);

            // inserisco il testo nel div col numero
            boxNum.innerHTML=(i);

        }

        
    }


)