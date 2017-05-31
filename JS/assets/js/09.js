// /*LES BOUCLES*/

// //  La boucle FOR 
// // POUR i=1;tant que i<=(strictement inferieur ou egale) 10; alors, j'incremente
// for(var i=1;i<=10;i++){
//     document.write("<p>Instruction indiquee: <strong>"+i+"</strong></p>");
// }

// document.write("<hr>");

// // --La boucle WHILE: Tant que
var j=1;
while(j<=10){
    document.write("<p>Instruction indiquee: <strong>"+j+"</strong></p>");
    j++;
}
document.write("<hr>");
// // EXERCICE

var prenoms=["Hugo","Jean","Matthieu","Luc","Pierre","Marc"];
// console.log(prenoms);

// --1ere facon de faire
for(var a=0;a<=5;a++){
 document.write("<p>Name: <strong>"+prenoms[a]+"</strong></p>");
}

// --2eme facon de faire avec "length"
var Prenomlength=prenoms.length;
for(var i=0;i<Prenomlength;i++){
    console.log(prenoms[i]);
}
// --3eme facon de faire avec while
var j=0;
while(j<Prenomlength){
    console.log(prenoms[j]);
    j++;
}
// --Meme exercice avec la boucle forEach
// --Attention a la performance!

Pernoms.forEach()