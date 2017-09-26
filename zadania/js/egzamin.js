//******Arkusz E.14-01-15.01*********

var elPierwszy = document.getElementById('pierwszy');
 var elDruga = document.getElementById('druga');
var elPodstawa = document.getElementById('podstawa');
var elWykladnik = document.getElementById('wykladnik');

var elDodawanie = document.getElementById('dodawanie');
var elOdejmowanie= document.getElementById('odejmowanie');
var elMnozenie = document.getElementById('mnozenie');
var elDzielenie = document.getElementById('dzielenie');
var elPotegowanie = document.getElementById('potegowanie');

var elWynik = document.getElementById('wynik');
var elWynikPotegi = document.getElementById('wynikPotegi');

elDodawanie.onclick = function(){
	if(elPierwszy.value == '' || elDruga.value == ''){
		elWynik.textContent = "Proszę uzupełnić obie liczby";
	}
	else{
		var wynik = parseFloat(elPierwszy.value) + parseFloat(elDruga.value);
		elWynik.textContent ='Suma wynosi: ' + wynik;
	}
}

elOdejmowanie.onclick = function(){
	if(elPierwszy.value == '' || elDruga.value == ''){
		elWynik.textContent = "Proszę uzupełnić obie liczby";
	}
	else{
		var wynik = parseFloat(elPierwszy.value) - parseFloat(elDruga.value);
		elWynik.textContent ='Różnica wynosi: ' + wynik;
	}
}

elDzielenie.onclick = function(){
	if(elPierwszy.value == '' || elDruga.value == ''){
		elWynik.textContent = "Proszę uzupełnić obie liczby";
	}
	else if(elDruga.value == 0){
		elWynik.textContent = 'Nie wolno dzielić przez 0';
	}
	else{
		var wynik = parseFloat(elPierwszy.value) / parseFloat(elDruga.value);
		elWynik.textContent ='Iloraz wynosi: ' + wynik;
	}
}
elMnozenie.onclick = function(){
	if(elPierwszy.value == '' || elDruga.value == ''){
		elWynik.textContent = "Proszę uzupełnić obie liczby";
	}
	else{
		var wynik = parseFloat(elPierwszy.value) * parseFloat(elDruga.value);
		elWynik.textContent ='Iloczyn wynosi: ' + wynik;
	}
}
elPotegowanie.onclick = function(){
    if(elPodstawa.value == '' || elWykladnik.value == ''){
        elWynikPotegi.textContent = 'Proszę uzupełnić obie liczby';
    }
    else if (elWykladnik.value < 0){
        elWynikPotegi.textContent = 'Wykładnik potęgi musi być dodatni';
    }
    else{
        elWynikPotegi.textContent = 'Wynik działania wynosi: ' + Math.pow(elPodstawa.value,elWykladnik.value);
    }
}
