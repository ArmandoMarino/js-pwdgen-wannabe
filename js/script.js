console.log('JS OK')


/* TRACCIA
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21
*/



// Prendo l'elemento dal DOM
const targetElement = document.getElementById('target');
//// console.log(targetElement);

// Chiedi all’utente il suo nome,
const firstName = prompt("Qual'è il tuo nome?", "Armando");
console.log(firstName);

// Chiedi all’utente il suo cognome,
const lastName = prompt("Qual'è il tuo cognome?", "Marino");
console.log(lastName);

// Chiedi all’utente il suo colore preferito,
const userColor = prompt("Qual'è il tuo colore preferito?", "Verde");
console.log(userColor);

// Infine scrivi sulla pagina nomecognomecolorepreferito21
targetElement.innerText = firstName + lastName + userColor + "21";