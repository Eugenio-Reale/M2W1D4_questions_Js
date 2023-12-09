/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*  Number = una variablie che contiene informazione numerica, può essere un numer intero, decimale, ecc..

    String = una stringa contiene una serie di caratteri, numeri compresi, che si susseguono in maniera fissa 
            e lineare per esempio "Ch4rt4g0 d3l3nd4 3st" è una stringa contenete 11 caratteri 7 numeri e 2 
            spaziature

    boolean = è una variabile dal contenuto logico, può essere TRUE o FALSE 
    
    object = è una variabile complessa capace di immagazzinare dati diversi relativi ad un elemento,
            per esempio l'output dell procedura document.getElementById() é un dato di tipo object
            
    NULL = variabile vuota, se inizializzata così, una variabile è priva di tipologia
    
    undefined = senza specifica, se inizializzata così, una variabile non ha tipologia specifica e può essere 
            qualunque cosa
    
    Structural = è una categoria di dati organizzati in maniera un po'più articolata
            tra questi abbiamo gli oggetti, gli array, e le funzioni

    */
    


    
/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* Un oggetto è l'insieme di informazioni, anche di diverso tipo tra loro, relative ad un elemento come per
    esempio potrebbe essere una cartella clinica relativa ad un paziente*/

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

12 + 20;

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

 let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name ="Eugenio";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

4 - x;

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john";
let name2 = "John";
console.log((name1 == name2));
console.log((name1.toLowerCase() == name2.toLowerCase() ));

