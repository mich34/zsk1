//pemtla for

/*for(var i=0;i<=10;i++){
    document.write(i);
    if(i==5){
        break;
    }
}

//losuj 100 liczb z przedzialu 50-200

for (var o=1;o<=100;o++){
    document.write(Math.floor(Math.random() * 151 + 50) + "<br>");
}

for(var p=1;p<=10;p++){
   if (p==10){
       document.write(p + '.');}
    else{
        document.write(p + ',');
    }

}*/

//while
/*
var i = 0;
while(i++ <5){
    document.write(i + "<br>");
}*/

//uzytkownik podaje z klawiatury 2 wartosci, petla wykonuje sie dopoki x>=y
/*
var x=0, y=0;

while(x >= y){
    var x = prompt("Podaj 1 wartość: ");
    var y = prompt("Podaj 1 wartość: ");
    document.write("x = " + x + "y = " + y + "<br>");
}*/

//do while
/*
do{
    wiek = prompt("poodaj wiek: ");
    if(wiek == 19){
        document.write("mozesz juz costam");
    }
    else{
        document.write("nie mozesz costam");
    }
}
while(wiek !=19)
*/

//wykorzystaj petle for i do while, podaj 5 liczb podzielnych przez 2 z klawiatury, zapisz je do tablicy i wyswietl w konsoli

/*var tab = [];
   for(var i=0;i<5;i++){
do{
    var liczba = prompt("podaj liczbe parzysta");
}
    while(liczba % 2 !=0)
    tab[i] = liczba;
}
console.log(tab);*/

//uzytkownik podaje z klawiatury liczbe, zabezpiecz przed podaniem litery, znaku specjalnego

/*document.write('<input type="text" id="liczba">');
document.write('<button id="przycisk">baton</button>');

var elPrzycisk = document.getElementById('przycisk');
var elLiczba = document.getElementById('liczba');

elPrzycisk.onclick = function(){
    if(!isNaN(elLiczba.value)){
        console.log(elLiczba.value);
    }
}*/

//***************FOR EACH*****************
/*
var tab = ['Anna', 'Jacek', 'Janusz', 'Adrian'];
for(var i=0;i<tab.length;i++){
    document.write(tab[i] + ' ');
}*/
//zad dom:
//Użytkownik podaje z klawiatury login i hasło, jeśli login to Filip, a hasło Okoń@1234 to na ekranie wyświetli w kolorze czerwonym  poprawne hasło, jeśli hasło będzie błędne to w kolorze zielonym wyświetli się błędne hasło. Użytkownik ma 3 próby.

/*function p(a,b){
    document.write('<br>' + a + b);

}
tab.forEach(p);*/

function pokaz(wartosc,index){
    document.write(index+1+' element tablicy wynosi: ');
    document.write(wartosc + '<br>');
}
tab.forEach(pokaz);




















