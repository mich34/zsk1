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

elKomunikat.style.color = 'red';

/*elImie.onblur = function(){
    if(elImie.value.length > 2 && elImie.value.length < 10){
        elKomunikat.textContent = 'PRAWIDŁOWE DANE!!! ;^)';
        }
    else{
        elKomunikat.textContent = 'BŁĘDNE DANE!!!! ;^(';
    }

}*/

/*function sprawdz(){
    if(elImie.value.length > 2 && elImie.value.length < 10){
        elKomunikat.textContent = '';
        }
    else{
        elKomunikat.textContent = 'BŁĘDNE DANE!!!! ;^(';

    }
    }
elImie.addEventListener('blur',sprawdz);*/

function sprawdz(){
    if(this.value.length > 2 && this.value.length < 10){
        elKomunikat.textContent = '';
        }
    else{
        elKomunikat.textContent = 'BŁĘDNE DANE!!!! ;^(';
        this.focus();
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
    elMail2.disabled = false;
    elMail2.focus();
    this.disabled = true;
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
    elPass2.disabled = false;
    elPass2.focus();
    this.disabled = true;
}

function regulamin(){
    if(elRegulamin.checked){
        elPrzycisk.disabled = false;
    }
    else{
        elPrzycisk.disabled = true;
    }
}

/*function odblokuj(){
    var zablokowana = document.getElementsByTagName('input');
    if (zablokowana.length > 0){
        for (var i=0; i < zablokowana.length; i++){
            if (zablokowana[i].disabled){
                zablokowana[i].disabled = false;
            }
        }
    }
}*/

function odblokuj1(){
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

elImie.addEventListener('blur',sprawdz);
elNazwisko.addEventListener('blur',sprawdz);
elLogin.addEventListener('blur',sprawdz);
elMail2.addEventListener('blur',mail);
elMail1.addEventListener('blur',blokuj);
elPass2.addEventListener('blur',haslo);
elPass1.addEventListener('blur',blokujHaslo);
elRegulamin.addEventListener('change',regulamin);
//elPopraw.addEventListener('click',odblokuj);
elPopraw.addEventListener('click',odblokuj1);
elPrzycisk.addEventListener('click',wyslij);










