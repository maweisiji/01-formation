/* DISPONIBILITE DU DOM */
/* A partir du moment ou mon DOM, c'est a dire l'ensemble de l'arborescence de ma page est completement charge, je peux commencer a utilser jQuery.
   Je vais meetre l'ensemble de mon code dans une fonction, cette fonction sera appele AUTOMATIQUEMENT  PAR jQuery losque le DOM sera entierement defini.

   3 facons de faire:
*/

// 1eme facon
jQuery(docment).ready(function(){
// Ici, le DOM est entierement charge, je peux proceder a mon code JS.
});

// // 2eme facon
$(document).ready(function(){
});

// 3eme facon
$(function(){
// --Ici,le DOM est entierement charge, je peux proceder a mon code JS.
alert("Hello world!");

// En JS:use textContent or innnerhtml(consider the balise in html)
document.getElementById('TextEnJQuery').innerHTML="<strong>Mon texte en JS</strong>";

// En Jquery: the way to selection is the same as in CSS, 
$("#TextEnJQuery").html("Mon Texte en JQ!");
});

