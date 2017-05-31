/*LES SELECTEUR JQUERY*/
// --Format:$('selecteur')
// --En jQuerym, tous les selecteurs CSS sont disponibles...

// DOM READY!
$(function(){
// LesFlemards.js
    function l(e){
        console.log(e);
    }
// Selectionner les balise SPAN:

    // Version en JS:
    l('SPAN en JS:');
    l(document.getElementsByTagName('span'));

    // Version JQuery
    l("SPAN en JQ:");
    l($('span'));

// Selectionner un menu
    // Version en JS:
    l('ID via JS:');
    l(document.getElementById('menu'));

    // Version JQuery
    l("ID via jQuery");
    l($("#menu"));

// Selectionner une classe
    // version Javascript
    l('Classe via JS:');
    l(document.getElementsByClassName('MaClasse'))

    // Version jQuery
    l("Classe via jQuery")
    l($("[href='http//www.google.fr']"))

});