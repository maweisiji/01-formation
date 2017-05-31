//--** LE DOM est une interface de developpement en JS pour HTML, Grace au DOM, je vais etre en meseure d'acceder/modifier mon HTML.
// L'objet "document": c'est le point d'entree vers mon contenu HTML! Chaque page chargee dans mon navigateur a un objet "document"

// --Comment puis-je faire pour recuperer les differentes information de ma page HMTL?

// *document.getElementById(): c'est une fonction qui va permettre de recuperer un element HTML a partir de son identifiant unique: ID.

var bonjour=document.getElementById("bonjour");
console.log(bonjour);

// *document.getElementsByClassName(): c'est une fonction qui va permettre de recuperer un ou plusieurs elements (une liste) HTML a partir de leur class, returns a table even if there's only 1 element
var contenu=document.getElementsByClassName("contenu");
console.log(contenu);

// Me renvoi: Un tableau JS avec mes elements HTML, ou encore autrement dit,
// une collection d'element HTML
// *document.getElementsByTagName:c'est une fonction qui va permettre de recuperer un ou plusieurs elements(une list) HTML a partir de leur *nom de balise*

var span=document.getElementsByTagName("span");
console.log(span);
