// Ma facon
// var NomPrenom=["ab","cd","ef","ere","ae"]

// for (var i=0;i<=4;i++){
//     order=i+1
//     document.write(order+"."+NomPrenom[i]+"<br/>");
//     var Major=["French","Maths","Physique"];
//     var Score=["1","2","3"];
//     var tLength=Major.length;
//     for(var a=0;a<tLength;a++){
//     document.write("       "+Major[a]+":"+Score[a]+"<br/>");}
// }

// facon prof
// 1.creation de notre tableau 3D en JS!
function l(e){
    console.log(e);
}

function w(t){
    document.write(t);
}

var PremierTrimestre=[
    {
        "nom":"LIEGEARD",
        "prenom":"Hugo",
        "moyenne":{
                "francais":4,
                "math":8,
                "physique":5,
        },

    },
     {
        "nom":"MANAS",
        "prenom":"Tanguy",
        "moyenne":{
                "francais":14,
                "math":8,
                "physique":15,
                "anglais":15,
        },

    },
     {
        "nom":"ARAUJO",
        "prenom":"Thiago",
        "moyenne":{
                "francais":4,
                "math":18,
                "physique":5,
        },

    },

];
l(PremierTrimestre);

w("<ol>");
    // Je souhaite afficher la liste de mes etudiants.
    for(i=0;i<PremierTrimestre.length;i++)
    { 
    // On recupere l'Objet Etudiant de l'iteration
    let Etudiant=PremierTrimestre[i];
    // Apercu dans la console
    l(Etudiant);
   //--Je deini NombreDeMatiere et la SommeDeNotes a 0;
   var NombreDeMatiere=0,SommeDeNotes=0;
    // Afficher le Premom et le nom d'un Etudiant
    w("<li>");
        w(Etudiant.prenom+" "+PremierTrimestre[i].nom+"<br/>");
    // afficher la moyenne de l'Etudiant
        w("<ul>");
        for(let matiere in Etudiant.moyenne){

            // l(matiere)
            // l(Etudiant.moyenne[matiere])
            NombreDeMatiere++;
            SommeDeNotes+=Etudiant.moyenne[matiere];
            w("<li>"); 
                w(matiere+":"+Etudiant.moyenne[matiere]);   
            w("</li>"); 
    } //fin de la boucle matiere
        w("<li>"); 
            w("Moyenne generale: "+Math.round(SommeDeNotes/NombreDeMatiere));
        w("</li>"); 
        
        w("</ul>");
    
    w("</li>");
    } //fin de la boucle pour les etudiants
w("</ol>");