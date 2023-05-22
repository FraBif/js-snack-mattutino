const firstWord = prompt("Inserisci una parola")
const secondWord = prompt("Inserisci un'altra parola")

function wordLength (parolaA , parolaB) {

if (parolaA.length === parolaB.length) {
    
    return console.log(parolaA , parolaB)
    
    
} else if (parolaA.length > parolaB.length) {
    
    return console.log(parolaA)
    
} else {
    return console.log(parolaB)
}
 
}

wordLength (firstWord , secondWord)
