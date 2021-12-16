
let generateNumber = Math.random() * 19;
generateNumber = Math.floor( generateNumber ) + 1;
console.log(generateNumber); 
// bu kontrol için commentli değil


let tahminSayisi = window.prompt ( 'How many guesses do you want to guess the number ?' );
tahminSayisi = parseInt(tahminSayisi);

let tahmin;
tahmin = parseInt(tahmin);

if ( tahminSayisi <= 0 || isNaN(tahminSayisi) == 1 ) {
     window.alert( `Please enter a number greater than 0 ...` );

} else {
    tahmin = window.prompt ( 'The number you need to find is between 0 and 20. Please guess the number' );
}


for ( let i = 1; i <= tahminSayisi; i++) {

    if ( tahmin != generateNumber && i == tahminSayisi ) {
        window.alert( `Unfortunately you didn't know! CORRECT NUMBER : ${generateNumber}` ); 
        document.getElementById("result").innerHTML = "<img src='images/sadsmiley.jpg'>";

    } else if ( tahmin > generateNumber ) {
         tahmin = window.prompt ( 'Please enter a smaller number' );

    } else if (tahmin < generateNumber) {
         tahmin = window.prompt ( 'Please enter a LARGER number' ); 

    } else { ( tahmin == generateNumber ) ;
         window.alert( `Congratulations... You guessed the number in ${i} tries...` );
         document.getElementById("result").innerHTML = "<img src='images/smiley.jpg'>"; 
        break;
    }
    
}
