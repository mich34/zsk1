/*//tworzenie tablicy za pomoca LITERAŁU
var kolory = ['biały', 'zielony', 'czerwony'];
var elKolor = document.getElementById("kolor").textContent = kolory[0];
//tworzenie tablicy za pomoca KONSTRUKTORA Array
var lalki = new Array('bmw', 'audi', 'ferrari');
console.log(lalki[lalki.length - 1]);
console.log("ilosc elementow w tablicy: " + lalki.length);
var nowe = prompt("nowy samochod");
lalki.splice(0,1,nowe);
document.write(lalki);*/
//tablice wielowymiarowe
var tab = new Array (
    new Array ('Jan', 'Kowal', 'Poznań'),
    new Array ('Anna', 'Nowak', 'Gniezno'),
    new Array ('Anna', 'Kowal', 'Poznań')
);
document.write(tab[1][2]);

var imiona = ['Janusz', 'Adrian', 'Andrzej', 'Zenon'];
console.log(imiona);

var posortowaneImiona = imiona.sort();
console.log(posortowaneImiona);

var odwrocImiona = posortowaneImiona.reverse();
odwrocImiona.pop();
console.log(odwrocImiona);
//dodanie elementu na poczatku tablicy
odwrocImiona.unshift('Paweł');
console.log(odwrocImiona);
odwrocImiona.push('Krystian');
console.log(odwrocImiona);
//sprawdzenie czy istnieje element w tablicy
console.log(odwrocImiona.indexOf('Józek')); //nie ma = -1
console.log(odwrocImiona.indexOf('Paweł')); //jest =/= -1
//tablica z liczbami
var cyfry = [1, 2, 20, 190, -1, 1000000];
console.log(cyfry);
var posortowaneCyfry = cyfry.sort();
console.log(posortowaneCyfry);
var sortujCyfryPrawidlowo = cyfry.sort(function(a,b){return (a-b);});
console.log(sortujCyfryPrawidlowo);
//zad dom: utwórz formularz z loginem(text) i hasłem(password), zapisz dane w tablicy, zapisz wynik w nagłówku drugiego stopnia, użytkownik podaje również kolor w jakim ma być wszystko wyświetlone.
