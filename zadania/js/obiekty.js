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

var HotelLech = new Hotel('Lech',100,30,true,false, ['jednoosobowy','apartament']);

document.write(HotelLech.wyswietl());

//zmienic metode wyswietl z konstruktora hotel, zastosuj tablice do wyswietlania wartosci









