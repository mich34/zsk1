var elImie = document.getElementById('imie');
var elNazwisko = document.getElementById('nazwisko');
var elLogin = document.getElementById('login');
var elMail1 = document.getElementById('mail1');
var elMail2 = document.getElementById('mail2');
var elPass1 = document.getElementById('pass1');
var elPass2 = document.getElementById('pass2');
var elUrodziny = document.getElementById('urodziny');
var elRegulamin = document.getElementById('regulamin');
var elPrzycisk = document.getElementById('przycisk');
var elPopraw = document.getElementById('popraw');
var elKomunikat = document.getElementById('komunikat');
var regImie = /^([a-z]|[ąśćżźęńł]){2,13}$/gi;
var regNazwisko = /^[a-ząśężźćńłó]{2,20}(\-[a-zęóąśłżźćń]{2,20})?$/gi;
var regLogin = /^[a-z0-9][\w\.\-\_]{1,25}[a-z0-9]$/gi;
var regMail = /^[a-z0-9][\w\.\-]{1,29}[a-z0-9]\@[a-z0-9]{2,10}\.([a-z0-9]{2,10}\.)?[a-z]{2,3}$/gi;
var regPass =/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W\_]).{8,35})$/ //bezpieczne haslo: male i duze litery, cyfry, znak specjalny
elKomunikat.style.color = 'red';

function sprawdzImie(){
	var sprawdz = regImie.test(elImie.value);
     if(sprawdz)
        {
        elKomunikat.textContent = '';
        }
    else{
        elKomunikat.textContent = 'BŁĘDNE IMIE!!!! ;^(';
        elImie.focus();
    }
    }
function sprawdzNazwisko(){
	var sprawdz = regNazwisko.test(elNazwisko.value);
     if(sprawdz)
        {
        elKomunikat.textContent = '';
        }
    else{
        elKomunikat.textContent = 'BŁĘDNE NAZWISKO!!!! ;^(';
        elNazwisko.focus();
    }
    }
function sprawdzLogin(){
	var sprawdz = regLogin.test(elLogin.value);
     if(sprawdz)
        {
        elKomunikat.textContent = '';
        }
    else{
        elKomunikat.textContent = 'BŁĘDNY LOGIN!!!! ;^(';
        elLogin.focus();
    }
    }
function mail(){
        if(elMail1.value != elMail2.value){
        elKomunikat.textContent = 'RÓŻNE MEJLE!!!';
        elMail1.disabled = false;
        elMail2.disabled = true;
        elMail1.focus();
        elMail1.value = '';
        elMail2.value = '';

    }
    else{
      elMail2.disabled = true;
        elKomunikat.textContent = '';
    }

}
function blokuj(){
    var sprawdz = regMail.test(elMail1.value);
    if(sprawdz){
    elMail2.disabled = false;
    elMail2.focus();
    this.disabled = true;
    elKomunikat.textContent = '';}
    else{
        elMail1.focus();
        elMail1.value = '';

        elKomunikat.textContent = 'BŁĘDNY MAIL';

    }
}

function haslo(){
    if (elPass1.value != elPass2.value){
        elKomunikat.textContent = 'HASŁA RÓŻNE!!!';
        elPass1.disabled = false;
        this.disabled = true;
        elPass1.focus();
        elPass1.value = '';
        this.value = '';
    }
    else{
        elPass2.disabled = true;
        elKomunikat.textContent = '';
    }
}

function blokujHaslo(){
    var sprawdz = regPass.test(elPass1.value);
    if(sprawdz){
        elPass2.disabled = false;
        elPass2.focus();
        elPass1.disabled = true;
        elKomunikat.textContent = '';
    }
    else{
        elPass1.focus();
        elKomunikat.textContent = 'BŁĘDNE HASŁO!';

    }
}

function regulamin(){
    if(elRegulamin.checked){
        elPrzycisk.disabled = false;
    }
    else{
        elPrzycisk.disabled = true;
    }
}


function odblokuj(){
    var zablokowana = document.querySelectorAll('input[disabled]');
    if (zablokowana.length > 0){
        for (var i=0; i < zablokowana.length; i++){
            if (zablokowana[i].disabled){
                zablokowana[i].disabled = false;
            }
        }
    }
}

function wyslij(){
    var puste = false;
    var input = document.querySelectorAll('input');
    for (var i=0; i<input.length ;i++){
        if(input[i].value == ''){
            puste = true;
            break;
        }
    }

    if (puste){
            elKomunikat.textContent = 'PUSTE POLA!!!!';
        }
    else{
    document.write('<div>');
    document.write('Imię: ' + elImie.value + '<br>');
    document.write('Nazwisko: ' + elNazwisko.value + '<br>');
    document.write('Login: ' + elLogin.value + '<br>');
    document.write('Mail: ' + elMail1.value + '<br>');
    document.write('Data: ' + elUrodziny.value + '<br>');
    document.write('</div>');
    }
}

elImie.addEventListener('blur',sprawdzImie);
elNazwisko.addEventListener('blur',sprawdzNazwisko);
elLogin.addEventListener('blur',sprawdzLogin);
elMail2.addEventListener('blur',mail);
elMail1.addEventListener('blur',blokuj);
elPass2.addEventListener('blur',haslo);
elPass1.addEventListener('blur',blokujHaslo);
elRegulamin.addEventListener('change',regulamin);
elPopraw.addEventListener('click',odblokuj);
elPrzycisk.addEventListener('click',wyslij);

//przy hasle wyswietl czy haslo jest slabe, dobre czy silne. wyswietlenie ma byc obrazkiem!!!!!???kolor zielony: silne, pomaranczowy: dobre, czerwony: slabe. progressbar










