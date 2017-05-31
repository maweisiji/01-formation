/*La manipulatoin des contenus*/
function l(e){
    console.log(e);
}

// Je souhaite recrupere mon lien, comment proceder?
var google=document.getElementById("google");
l(google)

// Maintenant, je souhaite acceder aux informations de ce lien, par example:
    // A.le lien vers lequel pointe la balise
    l("Le lien vers lequel pointe la balise:")
    l(google.href);

    // B.L'ID de la balise
    l("La ID de la balise:")
    l(google.id);

    // C. La classe de la balise
    l("La Classe de la balise")
    l(google.className);
    
    // D. Le Texte de la balise(l'element)
    l("La text de la balise")
    l(google.textcontent);

//Maintenant, je souhaite modifier le contenu de mon lien.
// Commme une variable classique, je vais simplement venir affecter une nouvelle valeur.
google.textContent="Mon lien vers google!";

// AJOUTER UN ELEMENT DANS MA PAGE

// 1. La fonction document.createElement() qui va nous permettre de generer un nouvel element dans le DOM que je pourrais par la suite 
    // avec les methodes que nous venons de voir. 

    // PS: Ce nouvel element est place en memore.

    // --Definition de mon element
    var span=document.createElement("span");

    // Si je souhaite lui donner un ID
    span.id="MonSpan";
    // Si je souhaite lui attirbuer du contenu...
    span.textContent="Mon Beau Text en JS";

// 2. La fonction appendChild() va me permettre de rajouter un enfant a un element du DOM.
google.appendChild(span);


// EXERCICE en partant du travail deja fait sur la page. 
// creez directement dans la page un lien

// creation de la balise h1 
var h1=document.createElement("h1");

// creation de la bailse a
var a=document.createElement("a");

// Je vais donner un titre a mon lien
a.textContent="Titre de mon article";

//  Je veux donner un lien a mon lien
a.href="#";
// appendChild(()
    // Je met mon lien(a) dans mon h1
    h1.appendChild(a);
    // Je met mon h1 dans ma page, dans mon body
    document.body.appendChild(h1);
// correction du bonus
    // Je veux que mon lien soit du couleur rouge
    a.style.color="red";
    // Je veux que mon lien ne soit pas souligne
    a.style.textDecoration="none";