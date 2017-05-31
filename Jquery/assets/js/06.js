// LES SELECTEURS D'ENFANTS JQUERY

// --Initialization de JQuery
$(function(){
    // ici commence mon code jquery
    // Les Flemards.js
    function l(e){
        console.log(e);
    };
    
// Je souhaite selectionner toutes mes dives
l($('div'));
// Je souhaite selectionner mon header
l($('header'));
// Je souhaite tous les elements (decedants direct(enfants)) qui sont dans mon header
l($('header').children());
// Je souhaite parmi des descendants directs, uniquements les elements "ul"
l($('header').children('ul'));
// Je souhaite recuperer tous les elements "li" de mon "ul"
l($('header').children('ul').find('li'));
// Je souhaite recuperer uniquement le 2eme elements de mes "li"
l($('header').find('li').eq(1));
// Je souhaite connaitre le voisin immediat de mon "header"?
l($('header').find('li').next());//later voisin
l($('header').find('li').prev());//precedent voisin
l($('header').find('li').next().next());
// Les parents
l($("header").parent());
});
