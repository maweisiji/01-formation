/* 
--------------------
LES EVENEMENTS
--------------------
 Les evenements, vont me permettre de declencher une fonction, c'est a dire: une serie d'instruction, suite a une action de mon utilisateur.

 OBJECTIF: Etre en mesure de captuerer ces evenements, afin d'executer une fonction.

 Les evenements: MOUSE 
     CLICK: au clic sur un element.
     mouseenter: la souris passe au dessus de la zone qu'occupe un element
     mouseleave: la souris sort de cette zone
 Les evenements: KEYBOARD
     keydown:une touche du claiver est enfonce
     keyup: une touche a ete relache
 Les evenements: WINDOW
     scroll:defilement de la fenetre
     resize:redimensionnement de la fenetre
 Les evenements: FORM
     change: pour les element <input>, <select> et <textarea>
     submit: a l'envoie(soumission) d'un formulaire
 Les evenements: DOCUMENT
     DOMContentLoaded: Execute lorsque le document HTML est completement charge, sans attendre le CSS et les images.
----------------------------
LES ECOUTEURS D'EVENEMENTS
----------------------------
Pour attacher un evenement a un element, ou autrement dit, pour declarer un ecouteur d'evenment qui se chargera de lancer un action, 
c'est a dire une fonction pour un evenment donne, je vais utiliser la syntaxe suivants:
*/

var p=document.getElementById("MonParagraphe");
console.log(p);

// Je souhaite que mon paragraphe soit rouge au clic de la souris.
    // 1. Je defini une fonction charge d'executer cette action.
    function changeColorToRed(){
        p.style.color="red";
    }
    // 2. Je declare un ecouteur qui se chargera d'appeler la fonction au declenchement de l'evenement.
    p.addEventListener("click",changeColorToRed);

/* exercice  
A l'aide de javascript, creez un champ "input" type text avec un ID unique. Affichez ensuite dans une alerte, la saisie de l'utilisateur.*/

// create a input text area with 

var inputfield = document.createElement('input');
// Attrribution d'un Attribut
inputfield.setAttribute('type','text');
inputfield.setAttribute('placeholder','Saisissez un contenu...');

// Attribution d'un ID
inputfield.id = 'IDunique';
// Ajoute de l'element dans la page
document.body.appendChild(inputfield);

// Creation d'un ecouteur
inputfield.addEventListener("change",shittyalert);

function shittyalert(){alert(inputfield.value)};

