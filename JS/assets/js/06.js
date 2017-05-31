/*--LES FONCTIONS--*/

//Declarer une fonction
//Cette foncton ne retourne aucune valeur
function DitBonjour(){
    // Lors de l'appel de la fonction, les instructions ci-dessous seront executees.
    alert("Bonjour!");
}
// Je vais appeler ma fonctionn "DitBonjour" et declencher ses instructions.
DitBonjour();

// Declarer une fonction qui prend une variable en parametre
function Bonjour(Prenom, Nom){
    document.write("<p>Hello <strong> "+Prenom+""+Nom+"<strong>!</p>")
}
// Appeler/utiliser une fonction avec un parametre
Bonjour("Hugo","LIEGEARD");

// OU
var Prenom="Yimin"
var Nom="JI"

Bonjour(Prenom,Nom);
Bonjour("Tanguy","MANAS");

//*EXERCICI: creez une fonction permettant d'effectuer l'addition de deux nombres passe en parametre.*//

function Addup(a,b){
    document.write("the sum of a+b = "+(a+b))
}
var a=1
var b=9
Addup(a,b);
// facon prof

function addition(nb1,nb2){
// let result=nb1+nb2;
// --le mot cle "return" permet de renvoyer une valeur en sortie.
return nb1+nb2;
}

document.write("<p>"+addition(10,5)+"</p>");

