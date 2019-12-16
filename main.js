
let generateNumber = Math.random() * 19;
generateNumber = Math.floor( generateNumber ) + 1;
console.log(generateNumber); 
// bu kontrol için commentli değil


let tahminSayisi = window.prompt ( 'Sayıyı tahmin etmek için kaç tahmin hakkı istersiniz ?' );
tahminSayisi = parseInt(tahminSayisi);

let tahmin;
tahmin = parseInt(tahmin);

if ( tahminSayisi <= 0 || isNaN(tahminSayisi) == 1 ) {
     window.alert( `Lütfen " 0 " dan BÜYÜK bir SAYI giriniz...` );

} else {
    tahmin = window.prompt ( 'Bulmanız gereken sayı " 0 ile 20 " arasındadır. Lütfen sayıyı tahmin ediniz' );
}


for ( let i = 1; i <= tahminSayisi; i++) {

    if ( tahmin != generateNumber && i == tahminSayisi ) {
        window.alert( `Malesef sayıyı bilemediniz! DOĞRU SAYI : ${generateNumber}` ); 
        document.getElementById("result").innerHTML = "<img src='images/sadsmiley.jpg'>";

    } else if ( tahmin > generateNumber ) {
         tahmin = window.prompt ( 'Daha küçük bir sayı giriniz' );

    } else if (tahmin < generateNumber) {
         tahmin = window.prompt ( 'Daha BÜYÜK bir sayı giriniz' ); 

    } else { ( tahmin == generateNumber ) ;
         window.alert( `Tebrikler...Sayıyı ${i} denemede doğru tahmin ettiniz...` );
         document.getElementById("result").innerHTML = "<img src='images/smiley.jpg'>"; 
        break;
    }
    
}
