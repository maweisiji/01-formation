// --Declarer un Tableau Numerqiue
var monTableau=[];
var myArray   =new Array;

// --Affecter des valeurs a un Tableau Numerique
monTableau[0]="Hugo";
monTableau[1]="Tanguy";
monTableau[2]="Geraldine";

// --Afficher le contenu de mon Tabeleau numerique dans la console.
console.log(monTableau[0]);//Hugo//
console.log(monTableau[1]);//Tanguy//
console.log(monTableau[2]);//Geraldine//
console.log(monTableau);//Afficher toutes les donnees.//

// --Declarer et affecter des valeurs a un Tableau Numerique
var NosPrenoms=["Yimin","Alex","Cristian","Tristan"];
console.log(NosPrenoms);
console.log(typeof NosPrenoms);

// --Declarer et Affecter des Valeurs a un Objet.(Pas de tableaux Associatif en JS)
var Coordonee={
    "prenom":"Hugo",
    "nom"   :"LIEGARD",
    "age"   :27,
}

console.log(Coordonee);
console.log(typeof Coordonee);

// --Comment creer et affecter des valeurs a un Tableau a 2 Dimensions.

// --Je vais creer 2 tableaux numeriques
var listeDePrenoms=["Hugo","Rodrigue","Kristie"];
var listeDeNoms   =["LIEGEARD","NOUVEL","SOUKAI"];

//-- Je vais creer un tableau a 2 dimensionss a partir de mes 2 tableaux numeriques
var Annuaire=[listeDePrenoms,listeDeNoms];
console.log(Annuaire);

// --Afficher un Nom et un Prenom sur ma page HTML
document.write(Annuaire[0][1]);
document.write("");
document.write(Annuaire[1][1]);

// --Exercise:creez un tableau a 2 dimensions appele "AnnuaireDesStagiares" qui contiendra toutes les coordonees pour chaque stagiare.ex.Nom, Prenom, Tel.

var listeDeNomsStag   =["Nom","Prenom","Tel"]
var listeDePrenomsStag=["JI","Yimin",18]

var AnnuaireDesStagiares=[listeDeNomsStag,listeDePrenomsStag];

console.log(AnnuaireDesStagiares);

// FACONNE PROF JSON    
var AnnuaireDesStagiares=[
    {"Prenom":"Hugo","Nom":"LIEGEARD","Tel":"0783 97 15 15",},
    {"Prenom":"Tanguy","Nom":"MANAS","Tel":"XX",},
    {"Prenom":"Yimin","Nom":"JI","Tel":"XX",},
]
console.log(AnnuaireDesStagiares);
console.log(AnnuaireDesStagiares[0]["Nom"]);//LIEGEARD
console.log(AnnuaireDesStagiares[1].Nom);//MANAS

// --Ajouter un element

var Couleurs=["Rouge","Jaune","Vert"];

// --Si je souhaite ajouter un element dans mon tableau
// --Je fait appel a la fonction push() qui me 1. renvoi le nombres d'elements de mon tableau, 2.add an element to the end of a table.

var nombreElementsDeMonTableau=Couleurs.push("Orange");
console.log(Couleurs);
console.log(nombreElementsDeMonTableau);
// --NB:La fonction unshift() permet d'ajouter un ou plusieurs elements en debut de tableau.

// * RECUPERER ET SORTIR LE DERNIER ELEMENT
// --La fonction pop() me permet de supprimer le dernier element de mon tableau et d'en recuperer la valeur.
// --Je peux accessoirement recuperer cette valeur dans une variable.
var poplastelement=Couleurs.pop();
console.log(poplastelement);
console.log(Couleurs);

// --La meme chose est possible avec le permier element en utilisant la fonction shift();
// --NB: La fonction splice() vous permet de faire sortir un ou plusieurs elements
// --de votre tableau.



