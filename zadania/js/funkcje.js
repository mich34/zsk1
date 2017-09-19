/*
function witaj(imie){
    document.write("witaj " + name);   
}
var name = "Ja-Nush";
witaj(name);
*/
/*
function poleProstokata(a,b){
    document.write("pole prostokąta = " + wynik);
    
}
var a = prompt("podaj bok a");
var b = prompt("podaj bok b");
var wynik = a*b;
poleProstokata(a,b);*/

/*
function poleObjetosc(szerokosc, dlugosc, wysokosc){
    var pole = szerokosc * dlugosc;
    var objetosc = pole * wysokosc;
    var wynik = [pole, objetosc];
    return wynik;
}
var x = prompt("Podaj x:");
var y = prompt("Podaj y:");
var z = prompt("Podaj z:");
var a = prompt("Podaj czy to ma być pole(0) czy objętość(1):");

var poleLubObjetosc = poleObjetosc(x,y,z)[a];
console.log(poleLubObjetosc);
*/

//napisac program, ktory oblicza obwod, pole kola oraz objetosc stozka, dane uzytkownik podaje z klawiatury, wykorzystaj obiekt "math", uzytkownik wybiera w radio co chce obliczyc, dane wyswietl w bloku strony

function obliczenia(promien, wysokosc){
    var obwod = 2 * Math.PI * promien;
    var pole = Math.PI * (promien * promien);0
    var objetosc = 1/3 * Math.PI * (promien * promien) * wysokosc;

}







