/* Palidroma:
1) Chiedere all’utente di inserire una parola
2) Creare una funzione per capire se la parola inserita è palindroma */






/* Pari e Dispari

/* 1) L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.  //!check */

let userGambling = prompt("scrivi la tua scelta tra pari o dispari:");
console.log(userGambling);
let userNumber = parseInt(prompt("scegli un numero compreso tra 1 e 5:")); 
console.log(userNumber);

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
console.log( random);

/* 3) Sommiamo i due numeri //! check*/
let sum = userNumber + random;
console.log(sum);

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




