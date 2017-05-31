// alert("Wow! Tu es sur ma page!");

// deux slash pour faire un commentaire uniligne.

/*
ici,je peux faire un commentaire sur plusieurs lignes.

Raccouci:ctrl+/
       ou: ctrl+shift+/
    */

// 1: declarer une variable en JS

var Prenom;

// --2/ affecter une valeur

Prenom="Yimin"; 
// --3:afficher la valeur de variable dans la console.
console.log(Prenom);

/*-------------les types des variables--------------*/

// ici, typeof me permet de connaitre le type de ma variable.
console.log(typeof Prenom)
// declaration d'un nombre
var Age=40;
// afficher dans la console
console.log(Age);
// connaitre son type
console.log(typeof Age);

/*----La portee des variables-------
    Les variables declaerees directement a la racine du fichier JS 
    sont appelees varaible GLOBALES.
    Elle sont disponibles dans l'ensemble de votre docuent, y compris dans les fonctions.
    ### 
    Les variables declarees a l'interieur d'une fonction sont appelees variables locales.
    ###
    Depuis ECMA6, vous pouvez declarer une variables avec le mot cle "let".
    Votre variable sera alors accessible uniquement dans le bloc dans lequelle 
    elle est contenue CAD declaree.
    Si elle est declaree dans une condition, elle sera disponible uniquement dans le bloc
    de la condtio.
-----*/
// --LES variable FLOAT
var uneDecimale=-2.894;
console.log(uneDecimale);
console.log(typeof uneDecimale);
// --LES booleans(vrai/faux)
var unBoolean=false;
console.log(unBoolean);
console.log(typeof unBoolean);
/*--Les constantes
La declaration CONST permet de creer une constante accesbbiel uniquement en lecture.
Sa valeur, ne pourra pas etre modifiee par des reaffections ulterieures.
Une constante ne peut pas etre declaree a nouveau.
*/

// generalement, par convention, les constantes sont en majuscule. 
const HOST="localhost";
const USER="root";
const PASSWORD="mysql";

// Je ne peux pas faire cela---
// USER="Hugo"
// uncaught typeerror: assignment to constant variable.

/*----La minute INFO-------
au fur et a mesure que l'on affecte ou re-affecte
des valeurs a une variable, celle-ci prend la nouvelle valeur 
et le nouveau type.

En javascript(ECMA script): les variables sont auto-typees.

Pour convertir une variable de type NUMBER en STRING et STRING en NUMBER, 
je peux utiliser les fonctions natives de javascript.*/

var unNombre="24";
console.log(unNombre);
console.log(typeof unNombre);

// la fonction parseInt() pour retourner un Entier a partir de ma chaine de caractere.
unNombre=parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// je re-affecte une valeur a ma variable
unNombre="12.55";
console.log(unNombre);
console.log(typeof unNombre);

// la fonctoin parseFloat() permet de retourner un Float sur la Base d'un STRING
unNombre=parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// conversion d'un nombre en STRING avec toSTRING()
var unNombreEnString=10;
var maChaineDeCaractere=unNombreEnString.toString();
console.log(unNombreEnString);
console.log(typeof unNombreEnString);
console.log(typeof maChaineDeCaractere);

// 