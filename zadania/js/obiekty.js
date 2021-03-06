//tworzenie obiektu za pomocą literału obiektu
//var janusz = {}; obiekt pusty
var janusz = {
    wzrost : 180,
    waga : 80,
    miejsceUrodzenia : 'Poznań',
    płeć : 'm'}; //obiekt
//console.log(janusz.wzrost);

var auto = {
    marka : 'Volkswagen',
    model : 'Polo',
    predkosc : 120,
    wyswietl(){
        //document.write('Marka: ' + this.marka);
        //document.write('Marka: ' + auto.marka);
        return 'Marka: ' + auto.marka;
    }
};
//auto.wyswietl();
//document.write(auto.wyswietl());

var ksiazka = {
    tytul: 'Pan Tadeusz',
    rokWydania: 1834,
    gatunek: 'poemat epicki',
        autor:{
            imie: 'Adam',
            nazwisko: 'Małysz',
            wyswietlDane(){
                return 'Imię: ' + this.imie + '<br>' + 'Nazwisko: ' + this.nazwisko;
            }
        }
}
//document.write(ksiazka['autor']['imie']);
//document.write(ksiazka.autor.imie);
//document.write(ksiazka.autor['imie']);

//var klucz = 'nazwisko';
//console.log(ksiazka.autor[klucz]);

//document.write(ksiazka.autor.wyswietlDane());
//console.log(ksiazka.autor.wyswietlDane());//nie dziala <br>

//*******************************************************

//tworzenie pustego obiektu i dodawanie nowych właściwości i metod


/*var produkt = {};

produkt.nazwa = 'pralka';
produkt.model = 'WAK2024PI';
produkt.firma = 'Bosch';
produkt.waga = 8;
produkt.cena = 1500;
produkt.wyswietl = function(){
    return 'Nazwa: ' + this.nazwa + '<br>' +
    'Model: ' + this.model + '<br>' +
    'Firma: ' + this.firma + '<br>' +
    'Waga: ' + this.waga + '<br>' +
    'Cena: ' + this.cena;
};
console.log(typeof(produkt.nazwa));
console.log(typeof(produkt.cena));
console.log(typeof(produkt.wyswietl));
console.log(produkt.nazwa);
console.log(produkt.cena);
document.write(produkt.wyswietl());*/

//***************************************************

//konstruktor objektu

//var tab = new Array();

var hotel = new Object();
hotel.nazwa = 'Hotel Poznań';
hotel.pokoje = 50;
hotel.zarezerwowanePokoje = 35;
hotel.silownia = true;
hotel.basen = true;
hotel.rodzajPokoju = ['pojedyncze', 'podwójne', 'apartament'];
hotel.wolnePokoje = function(){
    return this.pokoje - this.zarezerwowanePokoje;
}
console.log('Wolne pokoje: ' + hotel.wolnePokoje());

//******************************
/*

function Hotel(nazwa,pokoje,zarezerwowanePokoje,silownia,basen,rodzajPokoju){
    this.nazwa = nazwa;
    this.pokoje = pokoje;
    this.zarezerwowanePokoje = zarezerwowanePokoje;
    this.silownia = silownia;
    this.basen = basen;
    this.rodzajPokoju = rodzajPokoju;
    this.wolnePokoje = function(){
        return this.pokoje - this.zarezerwowanePokoje;
    }
    this.wyswietl = function(){
        return 'Nazwa: ' + this.nazwa + '<br>' +
        'Liczba pokoi: ' + this.pokoje + '<br>' +
        'Pokoje zarezerwowane: ' + this.zarezerwowanePokoje + '<br>' +
        'Czy jest siłownia: ' + this.silownia + '<br>' +
        'Czy jest basen: ' + this.basen + '<br>' +
        'Rodzaje pokojów: ' + this.rodzajPokoju + '<br>' +
        'Wolne pokoje: ' + this.wolnePokoje();
    }
}
*/


//zmienic metode wyswietl z konstruktora hotel, zastosuj tablice do wyswietlania wartosci



function Hotel(nazwa,pokoje,zarezerwowanePokoje,silownia,basen,rodzajPokoju){
    this.tablica = [];
    this.tablica[0] = nazwa;
    this.tablica[1] = pokoje;
    this.tablica[2] = zarezerwowanePokoje;
    this.tablica[3] = silownia;
    this.tablica[4] = basen;
    this.tablica[5] = rodzajPokoju;
    this.tablica[6] = this.tablica[1] - this.tablica[2];

    this.wyswietl = function(){
        return this.tablica;
}
}



var HotelLech = new Hotel('Lech',100,30,true,false, ['jednoosobowy','apartament']);

//document.write(HotelLech.wyswietl());

//**********************************************************

function Osoba(imie, nazwisko, wiek, plec){
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.wiek = wiek;
    this.plec = plec;
    this.narodowosc = 'Polska';
}

var ja = new Osoba('Michał', 'Szafer', 19, 'M');
var czarek = new Osoba('Czarek', 'Kowal', 34, 'M');

//document.write(czarek.imie);

//utworz konstruktor o nazwie pies i parametrach imie rasa waga oraz ulubione zajecia(moze byc wiele wartosci), utworz 3 obiekty o nazwach azor, ebi saba

function Pies(imie, rasa, waga, ulubioneZajecia){
    this.imie = imie;
    this.rasa = rasa;
    this.waga = waga;
    this.ulubioneZajecia = ulubioneZajecia;
}

var azor = new Pies('Azor', 'mieszaniec', 8,['spacery', 'jedzenie']);
var ebi = new Pies('Ebi', 'mieszaniec', 12,['kąpiel', 'zabawa']);
var saba = new Pies('Saba', 'mieszaniec', 10,['spanie', 'szczekanie']);

//document.write(ebi.ulubioneZajecia);

var psy = [azor, ebi, saba];//psy!!!!

//console.log(psy);

ebi.ulubioneZajecia.push('głaskanie');
/*
var rozmiar = 'maly pies';

for(var i=0;i<psy.length;i++){
    if(psy[i].waga<10)
        psy[i].rozmiar = 'maly pies';

    else
       psy[i].rozmiar = 'duzy pies';

document.write("Pies: <span style='color: blue'>" + psy[i].imie + '</span> to ' + psy[i].rozmiar + '<br>');

}*/

/*
var tab = ['jan', 'nowak', 'Poznań'];
for (var i in tab){
    //document.write(i);
    document.write(i + '-' + tab[i] + '<br>');

}

for(var x in ebi){
    if (x == 'imie' || x == 'rasa'){
        document.write(ebi[x]);
    }
}
*/

/*function Pole(a,b,c,d){
    return a*b;
}
console.log(Pole);
console.log(Pole.length);
console.log(Pole.constructor);
console.log(Pole.prototype);*/

function Uczen(imie, nazwisko){
    this.imie = imie;
    this.nazwisko = nazwisko;
}

var maciej = new Uczen('Maciej', 'Nowak');
Uczen.prototype.narodowosc = 'Polska';
Uczen.prototype.wyswietl = function(){
    return 'imie: ' + this.imie + ' nazwisko: ' + this.nazwisko + ' narodowosc: ' + this.narodowosc + '<br>';
}

document.write(maciej.wyswietl());

//document.write(maciej.constructor.prototype.narodowosc);

//utworz konstruktor rower, ktory ma 2 parametry nazwa oraz kolor, utworz prototyp ilosc kol = 2, utworz metode wyswietlajaca wszystkie dane z apmomoca for in prototyp wyswietlajacy wszystkie dane za pomoca for in

function Rower(nazwa, kolor){
    this.nazwa = nazwa;
    this.kolor = kolor;
}
Rower.prototype.iloscKol = 2;

var skladak = ['składak', 'niebieski'];
for (i in skladak){
    if(typeof(this[i] != 'function'))
    document.write(i + '-' + skladak[i] + '<br>');
}

console.log(maciej.hasOwnProperty('narodowosc'));
console.log(maciej.hasOwnProperty('imie'));




