// //* Les conditions * //
// var MajoriteLegaleFR=18;
// if(MajoriteLegaleFR>=16){
//     alert("bienvenu!")
// } else{alert("google...")}

// //* exercice: creer une fonction permettant de verifier l'age d'un visiteur(prompt). s'il a la majorite*// 
// // 1. declarer la majorite legale
// var MajoriteLegaleFR=18;
// // 2. creer une fonction pour demander son age
// var Age=parseInt(prompt("what is your age please?","<your age>"));
// // 3. une condition pour verifier si l'age de l'utilisateur est superieur a la majorite legale
//     //  Si plus senior que l'age legale, j'affiche un message de bienvenue
// if(Age>=MajoriteLegaleFR){
//     alert("Welcome!");
// }
//     //  Si non, j'affiche une alert
//         // Je redige vers google

// else{
//     alert("Your access is not authorised!");
//     window.location.href = "http://lmgtfy.com/?q=age+legale+france";}


// // method prof
// function VerifierAge(){
//     // method 1:
//         // let age=promot("hello, what is your age?","<age>");
//         // age=parseInt(age);
//         // return age;
//     // method 2:
//     return parseInt(prompt("hello, what is your age?","<age>"))
// }
// if(VerifierAge()>MajoriteLegaleFR){alert("welcome!")}
// else{window.location.href = "http://lmgtfy.com/?q=age+legale+france";}
// /*LES OPERATIONS DE COMPARAISON*/
// // *L'operateur de comparason"==" signifie: Egal a...
// // Il permet de verifier que deux variable sont identiques.

// // // *L'operateur de comparason"===" signifie: Strictement Egal a...
// // Il va comparer la valeur et aussi le type de donneee.

// // L'operateur de Comparaison "!=" signifie: Different de
// // L'operateur de Comparaison "!==" signifie: Strictement different de

/*EXERCICE: arrive sur un Espace Securise au moyen d'un email eet d'un mot de passe. Je doit saisir mon email et mon mot de passe afin d'etre authentifie sur le site. 
En cas d'echec une alert m'informe du probleme.
Si tous se passe bien, un message de bienvenue m'accueil.*/
// MA facon
var email,mdp;

email="wf3@h1-media.fr";
mdp="wf3";

function VerifierEmail(){
    return prompt("what is your email please?","<email>");
}
if (VerifierEmail()==email){
       function VerifierMdp(){
    return clientmdp=prompt("what is your password?","<xxxx>");}
    if (VerifierMdp()===mdp){
        alert("welcome!");
        document.location.href="http://www.google.com";}
    else{alert("Your password is incorrect!")}}

else{alert("Your email is incorrect!");}

// FACON Prof
// function connexion(user,motdepasse){
//     if(user==email && motdepasse==mdp);
//     return true;
// }else{return false;}

// var emaillogin=prompt("what is your email please?","<email>");
// var mdpillogin=prompt("what is your password?","<xxxx>");

// if(connexion(user,motdepasse)){
//     alert("bienvenue")''
// }else{ document.location.href="http://www.google.com";}

// L'operateur ET: && ou AND




