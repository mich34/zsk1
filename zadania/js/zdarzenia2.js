var elAuta = document.getElementById('auta');
var elUlubione = document.getElementById('ulubioneAuto');

function mojeAuto(){
     elUlubione.style.color = 'red';
    elUlubione.textContent = elAuta.value;
}

elAuta.addEventListener('change',mojeAuto);
