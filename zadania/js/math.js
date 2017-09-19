/*
var pi = Math.PI;
console.log(pi);

var x = prompt("Podaj wartość: ");
console.log(Math.sqrt(x));
*/

/*
var a = 13.2;
var b = 28.5;
var c = 1;

var minimalna = Math.min(a,b,c);
console.log(minimalna);
var maksymalna = Math.max(a,b,c);
console.log(maksymalna);
var zaokrąglenie = Math.round(b);
console.log(zaokrąglenie);
*/

//abs, round, floor

/*var x = -56;
var y = -13.1;
var z = 14.9;
document.write("<br>" + Math.abs(x) + "<br>");
document.write("<br>" + Math.abs(y) + "<br>");
document.write("<br>" + Math.abs(z) + "<br>");

document.write("<br>" + Math.round(x) + "<br>");
document.write("<br>" + Math.round(y) + "<br>");
document.write("<br>" + Math.round(z) + "<br>");

document.write("<br>" + Math.floor(x) + "<br>");
document.write("<br>" + Math.floor(y) + "<br>");
document.write("<br>" + Math.floor(z) + "<br>");*/

//potęgowanie

/*var p = Math.pow(2,10);
document.write(p);*/

//losowanie
/*var l = Math.random();
var k = 3.86778967569;
k = k.toFixed(2);
var g = 3.86778967569;
g = g.toPrecision(2);
l = l.toPrecision(2);
console.log(l);
console.log(k); // 3.87
console.log(g); // to jest string -> 3.9*/

//losowanie liczb: losuj z przedzialu 0-10

/*
var l = Math.floor(Math.random() * 11);
console.log(l);

//losuj z przedzialu 90-100

var los = Math.floor(Math.random() * 11 + 90);
console.log(los);
*/

var elPi = document.getElementById('PI');
var elNic = document.getElementById('NIC');
var elBaton = document.getElementById('baton');
var elWynik = document.getElementById('wynik');

elBaton.onclick = function(){
    if(elPi.checked){
        elWynik.textContent = Math.PI;
    }
    else if(elNic.checked){
        elWynik.textContent = "wybrałeś radio NIC";

    }
    else{
        elWynik.textContent = "nic nie wybrałeś";
    }
}








