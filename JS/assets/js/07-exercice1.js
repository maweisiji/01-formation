/*votre mission!
realiser une fonction permettant a un internaut de:
1. saisir son prenom dans un prompt;
2. retourner a l'utilisateur: Bonjour [PRENOM], Quel age as-tu?
3. Saisir son Age
4. Retourner a l'utilisateur：Tu es donc ne en [Annee de naissance]
5. Afficher ensuite un recaptiulatif dans la pages.
6. Bonjour [PRENOM], tu as [AGE]!
*/

var yearofbirth=new Date();

function Hello(){
    let prenom=prompt("Hello, what is your name?","<keyin your prenom>");
    console.log(prenom)
    let age=parseInt(prompt("Hello,"+prenom+"how old are you?","<keyin your age>"));
    alert("Amazing,so you were born in "+(yearofbirth.getFullYear()-age)+"!");
    document.write("Hello"+prenom+","+"it's amazing! You're"+age+"years old!");
}

Hello();
/* FACON PROF*/
// 1. Initilisation des variables
// 2. creation
    // 2a.


