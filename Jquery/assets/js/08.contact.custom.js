//DECLARATION DE FONCTION 

function validateEmail(email){
	var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	var valid = emailReg.test(email);

	if(!valid) {
        return false;
    } else {
    	return true;
    }
};
function l(e){console.log(e)};
function d(e){document.write(e)};
// Initialisation de jQuery (DOM ready)
$(function(){

//     // declaration de variables
var CollectionDeContacts=[];
// ---DECLARATION DES FONCTIONS
// Fonction 1 ajouterContact(contact): Ajouter un contact dans le tableau de Contacts,
// mettre a jour le tableau HTML, reinitialiser le formulaire et afficher une notification.
function ajouterContact(Contacts){
    // Ajout de 'uncontact' dans le tableau 'CollectionDeContacts'
    CollectionDeContacts.push(Uncontact);
    // Observez l'ajout des contacts dans la collection
    console.log(CollectionDeContacts);
    // On cache la phrase: aucun contact
    $('.aucuncontact').hide();
    // Mise a jour du HTML;
    $('#LesContact tbody').append(
        '<tr><td>'+UnContact.nom+'</td><td>'+Uncontact.prenom+'</td><td>'+Uncontact.email+'</td><td>'+Uncontact.tel+'</td></tr>'
    );
    reinitilisationDuformulaire();

}
// Fonction 2 reinitilisationDuformulaire();Apres l'ajout d'un contact, ou remet le formulaire a 0!
function reinitilisationDuformulaire(){
    // via JS
        // document.getElementById('contat').reset();
    // via jQuery
    $('#contact').get(0).reset; //get(0) js function to touch the first line of the table; get() and reset are functions javascript=>we can put java in jquery but not the reverse
    // or
    // $('#contact .form-control').val('');
}
// Afficher d'une notification
function afficherUneNotification(){
    $('.alert alert-success').fadeIn().delay(2000).fadeOut();
}

// Verificationn de la presence d'un contact dans contacts
function estCeQunContactEstPresent(UnContact){
    var estPresent=false;
}
// Verification de la validite d'un Email
function validateEmail(email){}
});         


// // ---TRAITMENT DE MON FORMULAIRE  
// // Detection de la soumission de mon formulaire
// $('#contact').on('submit',function(e){
//         e.preventDefault();
//         // recupereation des champs a verifier
//         var nom,prenom,email,tel;
//         nom=$('#nom');
//         prenom=$('#prenomn');
//         email=$('#email');
//         tel=$('#tel');
//         // verification des information...anotherway 
//         var mesInformationsSontValides=true;
//         // verification du nom/prenom/tel/email
//         if(nom.val().length)==0){
//             mesInformationsSontValides=false;
//         };
//         if(prenom.val().length)==0){
//             mesInformationsSontValides=false;
//         };
//         if(!validateEmail(email.val())){
//             mesInformationsSontValides=false;
//         };
//         if(tel.val().length)==0){
//             mesInformationsSontValides=false;
//         };
//     if(mesInformationsSontValides){
//         // Tous est correcvt, preparation du contact
//         var Contact={
//             'nom':nom.val(),
//             'prenom':prenom.val(),
//             'email':email.val(),
//             'tel':tel.val(),
//         }
//         // Obesrons dans le console.
//         console.log(Contact);

//         // verification de la presence d'un Contact dans Contacts
//         function estCeQunContactEstPresent(UnContact){
//             // --Boolean qui va indique la presence ou pas d'un contact
//             var estPresent=false;
//             // --On parcourt le tableau a la recherche d'une correspondance
//             for(var i=0;i<CollectionDeContacts.length;i++){
//                 // verification pour chaque contact du tableau, s'il y a une correspondance avec mon Objet Contact.
//                 if(UnContact.email=CollectionDeContacts[i].email){
//                     // --si une correspondance est trouve "estPresent" passe a true
//                     estPresent=true;
//                     // --on arret la boucle, plus besoin de poursuivre
//                     break;//return false=break, stop the action, to save time
//                 }
//             }
//             // on retourne estPresent
//             return estPresent;
//         }

//     } else{
//         // Les informations ne sont pas valides
//         alert('ATTENTION\nVeuillez bien remplir tous les champs.');
//     }

//     }
// )


// MA FACON
$('#contact').on('submit',function(){
        //    stop default action to send php
        event.preventDefault();
        // remove and recount
        $('.aucuncontact .nocontact').remove();
        //   clear to prevent double action
        $('#contact .has-error').removeClass('has-error');
        $('#contact .text-danger').remove();
        $('#contact .alert.alert-danger').remove();
        // create variables
        var Contact={
            'nom': nom.val();
            'prenom': prenom.val();
            'email': email.val();
            'tel': tel.val();
        }
        // verification of variables
        if(nom.val().length==0){
            nom.parent().addClass('has-error'); 
            $("<p class='text-danger'>N'oubliez pas de saisir votre nom</p>").appendTo(nom.parent());
        }
        if(prenom.val().length==0){
            prenom.parent().addClass('has-error'); 
            $("<p class='text-danger'>N'oubliez pas de saisir votre prenom</p>").appendTo(prenom.parent());
        }
        if(!validateEmail(email.val())){
            email.parent().addClass('has-error'); 
            $("<p class='text-danger'>Le format de votre email n'est pas correcte.</p>").appendTo(email.parent());
        }
        if(tel.val()==0 || $.isNumeric(tel.val())==false){
            tel.parent().addClass('has-error'); 
            $("<p class='text-danger'>N'oubliez pas de saisir votre numero correctement.</p>").appendTo(tel.parent());
        }
        if($(this).find('.has-error').length==0){
            for(var i=0;i<Contact.length;i++){
                    if(#Contact.email==CollectionDeContacts.email){function ajouterContact(Contacts);};
            }
                   

        })}        else{
                    $(this).prepend("<div class='alert alert-danger'>Nous n'avons pas ete en mesure de valider votre demand. Verifiez vos information.</div>");
                };

    }
    )});
    // creation of table in JS
     
                
    
    
   


