var regex = /\w+\.mp3/g;
var regex = /\w{1,}\.mp3/g;
var text1 = 'plik@mp3 arkusz.csv szkola.mp3 tekst.mp3';
var sprawdz1 =regex.test(text1);
var sprawdz2 =text1.match(regex);
console.log(sprawdz1);
console.log(sprawdz2);
document.write(sprawdz2);
