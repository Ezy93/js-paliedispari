/* Palidroma:
1) Chiedere all’utente di inserire una parola*/

let userword = prompt("inserisci una parola").toLocaleLowerCase().trim();
let arrayOfChar = [];

while(!isNaN (userword)){
    userword = prompt("inserisci una parola").toLocaleLowerCase().trim();
}

for(let i = 0; i < userword.length; i++){
    arrayOfChar.push(userword.charAt(i));
}

console.log(arrayOfChar);

/*2) Creare una funzione per capire se la parola inserita è palindroma */

console.log(arrayOfChar.reverse());

function isPalindrome(array){

    if(array.length === array.reverse().length){

        for(let x = 0; x < array.length; x++){
    
            if(array[x] === array.reverse()[x]){
    
                console.log("la parola da te inserita è palindroma");
                break;
            }else{
    
                console.log("la parola da te inserita NON è palindroma");
                break;
            }
        }
    }
} 

isPalindrome(arrayOfChar)










/* Pari e Dispari */

/* 1) L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.  //!check */
let userGambling = prompt("inserisci pari o dispari:").toLowerCase().trim();

/* ciclo di controllo sull'input dell'utente  */
while(userGambling !== "pari" && userGambling !== "dispari"){
    userGambling = prompt("inserisci pari o dispari:").toLowerCase().trim();
}
console.log("l'utente ha scommesso sul: " + userGambling);



let userNumber = parseInt(prompt("scegli un numero compreso tra 1 e 5: ")); 

/* ciclo di controllo sull'input numerico dell'utente  */
while(isNaN(userNumber) || userNumber < 1 || userNumber > 5){
    userNumber = parseInt(prompt("scegli un numero compreso tra 1 e 5: "));
}

console.log("l'utente ha scelto il numero: " + userNumber);

/* 2) Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). //!check */
function CPURandomNumber(){
    let randomNumber = Math.floor(Math.random()*5) + 1;
    return randomNumber;
}

/* 4) Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) //!check */
function oddOEven(number){
    if(number % 2 == 0){
        return true;
    }else{
        return false;
    }
}

let random = CPURandomNumber();
console.log( "il numero scelto dalla CPU è: " + random);

/* 3) Sommiamo i due numeri //! check*/
let sum = userNumber + random;
console.log("la somma tra il numero scelto dall'utente e quello scelto dalla CPU è: " + sum);

/* 5) Dichiariamo chi ha vinto. */ 

if(oddOEven(sum)){
    
    let controlVariable = "pari";
    
    if(userGambling === controlVariable){
        console.log("hai vinto la somma è pari"); //!check
    }else{
        console.log("hai perso la somma è pari"); //!check
    }
    
}else{
    
    let controlVariable = "dispari";
    
    if(userGambling === controlVariable){
        console.log("hai vinto la somma è dipari"); //!check
    }else{
        console.log("hai perso la somma è dispari");  //! check
    }
    
}




