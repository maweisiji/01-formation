// La concatenation
var Beginning       ="Aujourd'hui";
var Dateofmonth     =new Date();
var Suitedephrase   =", sont presents:";
var NumberofStudents=19;
var FinDePhrase     =" stagiaires.<br>";

// --Nous souhaitons maintenant, grace a la concatenation, afficher tout ce petit monde, en un seul morceau

document.write(Beginning + Dateofmonth.getDate() + "/" + (Dateofmonth.getMonth() + 1) + "/" + Dateofmonth.getFullYear()+Suitedephrase+NumberofStudents+FinDePhrase);

// EXCERCIESE: C


var phrase1="Je m'appelle";
var phrase2=" Yimin et j'ai ";
var age=2;
var phrase3=" ans!";

document.write(phrase1+phrase2+age+phrase3);
