var tekst = "ZSK - Zespół Szkół Komunikacji";
console.log(tekst.length); //30

var pierwszy = tekst.charAt();
console.log(pierwszy); //Z

var ostatni = tekst.charAt(tekst.length - 1);
console.log(ostatni); //i

//document.write(tekst.charAt(11)); //ł

//ASCII
document.write(tekst.charCodeAt(0)); //Z - 90
document.write(tekst.charCodeAt(14)); //z - 122

//Zamiana na duże litery

var duze = tekst.toUpperCase();
var male = tekst.toLowerCase();
console.log(duze);
console.log(male);

//cammelcase
var duzaMala = tekst.charAt(0).toUpperCase() + tekst.slice(1).toLowerCase();
console.log(duzaMala);

//uzytkownik wprowadza z klawiatury swoje imie, zamien 1 znak na duza litere a pozostale na male, wyswietl wszystko w naglowku drugiego stopnia w kolorze niebieskim

var imie = prompt("podaj imie");
var imie2 = imie.charAt(0).toUpperCase() + imie.slice(1).toLowerCase();
document.getElementById("drugiego").textContent = imie2;

console.log(tekst.substr(1,28));







