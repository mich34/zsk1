//wyrażenia regularne -> regex(regexp)

//var tekst = "Zespół Szkół Komunikacji";
//var tekst = "mąka";
//var tekst = "mąka@";
//var tekst = "mąkaa@";
//var tekst = "aa";
var tekst = "test";
var regex = /Szkół/;
var regex2 = /szkół/i; //i -> nie sprawdza wielkości liter
var regex3 = /^szkół/i; //^ -> jeśli ma być na początku
var regex4 = /szkół&/i; //& -> jeśli ma być na końcu
var regex5 = /^szkół&/i; //tylko to ma być
var regex6 = /[a-z]/; //przedział małych liter
var regex7 = /[A-z]/; //przedział wszystkich liter
var regex8 = /[A-Z]/; //przedział dużych liter
var regex9 = /[ąęćźżółńś]/; //przedział tych liter
var regex10 = /[ąęćźżółńś][a-z]/; //alfabet polski, nawiasy maja znaczenie w kolejnosci
var regex11 = /[a-z]\s/; // \s -> spacja na końcu
var regex12 = /[a-z]+@/; // + -> sprawdza czy jest jeden lub wiecej element po wzorcu
var regex13 = /mąka?/; // ? -> sprawdza czy jest jeden znak jeszcze na końcu
var regex14 = /^mąkaa?/; // ? -> zastępuje jeden znak poprzedzający
var regex15 = /[a]{1}/; // {} sprawdza czy jest tyle znakow ile wpisales
var regex16 = /[a]{1}$/; // $
var regex17 = /[a]{2,4}$/; //  przedział ile ma być liter
var regex18 = /\//; //  szuka / i \ zeby szykalo / musi byc \/(\+znak specjalny)
var regex19 = /./; //. -> zastępuje jeden znak
var regex20 = /\.+pl/; //szuka .pl
var regex21 = /[ąęćźżółńś]|[a-z]/; //| -> or
var regex22 = /\w/; // \w ->dowolny znak
var regex23 = /\W/; // \W -> negacja małego \w
var regex24 = /\d/; // \d ->dowolna liczba cyfr
var regex25 = /\D/; // \d ->dowolna liczba cyfr nie może być
var regex26 = /\s/; // \s ->dowolna liczba spacji
var regex27 = /\S/; // \S ->dowolna liczba spacji nie może być
var regex28 = /(test)/; // () ->teskt w nawiasie
var regex29 = /(test){2}/; // (){} ->liczba tego nawiasu obok siebie
var sprawdz = regex.test(tekst);
var sprawdz2 = regex2.test(tekst);
var sprawdz3 = regex3.test(tekst);
var sprawdz4 = regex4.test(tekst);
var sprawdz5 = regex5.test(tekst);
var sprawdz6 = regex6.test(tekst);
var sprawdz7 = regex7.test(tekst);
var sprawdz8 = regex8.test(tekst);
var sprawdz9 = regex9.test(tekst);
var sprawdz10 = regex10.test(tekst);
var sprawdz11 = regex11.test(tekst);
var sprawdz12 = regex12.test(tekst);
var sprawdz13 = regex13.test(tekst);
var sprawdz14 = regex14.test(tekst);
var sprawdz15 = regex15.test(tekst);
var sprawdz16 = regex16.test(tekst);
var sprawdz17 = regex17.test(tekst);
var sprawdz18 = regex18.test(tekst);
var sprawdz19 = regex19.test(tekst);
var sprawdz20 = regex20.test(tekst);
var sprawdz21 = regex21.test(tekst);
var sprawdz22 = regex22.test(tekst);
var sprawdz23 = regex23.test(tekst);
var sprawdz23 = regex23.test(tekst);
var sprawdz24 = regex24.test(tekst);
var sprawdz25 = regex25.test(tekst);
var sprawdz26 = regex26.test(tekst);
var sprawdz27 = regex27.test(tekst);
var sprawdz28 = regex28.test(tekst);
var sprawdz29 = regex29.test(tekst);

console.log(sprawdz);
console.log(sprawdz2);
console.log(sprawdz3);
console.log(sprawdz4);
console.log(sprawdz5);
console.log(sprawdz6);
console.log(sprawdz7);
console.log(sprawdz8);
console.log(sprawdz9);
console.log(sprawdz10);
console.log(sprawdz12);
console.log(sprawdz14);
console.log(sprawdz15);
console.log(sprawdz16);
console.log(sprawdz17);
console.log(sprawdz18);
console.log(sprawdz19);
console.log(sprawdz20);
console.log(sprawdz21);
console.log(sprawdz22);
console.log(sprawdz23);
console.log(sprawdz23);
console.log(sprawdz24);
console.log(sprawdz25);
console.log(sprawdz26);
console.log(sprawdz27);
console.log(sprawdz28);
console.log(sprawdz29);


//zadanie domowe

var elPrzycisk = document.getElementById('przycisk');
var elWynik = document.getElementById('sprawdz');

elPrzycisk.onclick = function(){
    var regEx1 = /^[0-9]{2}-[0-9]{3}$/;
    var regEx2 = /^\D[a-zA-Zęąńćźóćśł]{2,}$/;
    var elKod = document.getElementById('kodPocztowy');
    var elMiasto = document.getElementById('miasto');
    var sprawdzenie1 = regEx1.test(elKod.value);
    var sprawdzenie2 = regEx2.test(elMiasto.value);

if(sprawdzenie1 == false && sprawdzenie2 == false){
    elWynik.textContent = 'nieprawidłowe miasto i kod';
}else if(sprawdzenie1 == false){
    elWynik.textContent = 'nieprawidłowy kod pocztowy';
}else if(sprawdzenie2 == false){
    elWynik.textContent = 'nieprawidłowe miasto';

}

else{
     elWynik.textContent = 'Kod pocztowy: ' + elKod.value + ' i ' + 'miasto: ' + elMiasto.value;
}
}















