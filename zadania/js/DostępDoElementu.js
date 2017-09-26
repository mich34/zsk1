/*//Metoda getElementById()

var elPierwszy = document.getElementById('pierwszy');
elPierwszy.className = 'niebieski';

//Metoda getElementsByTagName()

var elNaglowek = document.getElementsByTagName('h1');
if (elNaglowek.length > 0){
	console.log(elNaglowek);
	elNaglowek[0].className = 'czerwony';
}

//Metoda getElementsByClassName()

var czerwony = document.getElementsByClassName('czerwony');
if(czerwony.length > 0){
	console.log(czerwony.length);
	console.log(czerwony);

	//metoda wolniejsza
	/*var ostatni = czerwony.item(czerwony.length - 1)*/

	//metoda szybsza
/*	var ostatni = czerwony[czerwony.length-1];*/
/*	ostatni.className = 'niebieski';}*/


//Metoda querySelector()

//zwraca pierwsze dopasowanie

/*var elTv = document.querySelector('li.grey');
elTv.className = 'niebieski';

//Metoda querySelectorAll()

var elTvAll = document.querySelectorAll('li.grey');
console.log(elTvAll.length);
elTvAll[2].className = 'niebieski';*/

//Metoda getElementsByName()

/*var elPrzycisk = document.getElementById('Przycisk');
//Ja zrobiłem sam
elPrzycisk.onclick = function() {
	var elAll = document.getElementsByName('TV');
	for ( var i=0; i<elAll.length; i++){
		elAll[i].className = 'niebieski';
	}
}*/

//To samo w pętli forEach

/*var elPrzycisk = document.getElementById('Przycisk');
var elTvZmien = document.getElementsByName('TV');

function zmien(element,index){
	elTvZmien[index].className = 'niebieski';
}
elPrzycisk.onclick = function (){
	elTvZmien.forEach(zmien);
} */

//fizzbuzz

for (var i=1;i<101;i++) {
if (i % 3 == 0) {
    document.write('Fizz' + '<br>');
}
if (i % 5 == 0){
    document.write('Buzz' + '<br>');
}
if (i % 15 == 0){
    document.write('FizzBuzz' + '<br>');
}
else {
    document.write(i + '<br>');
}
}
