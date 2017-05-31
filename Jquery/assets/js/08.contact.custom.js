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
    var Contacts=[];
// DECLARATION DES FONCTIONS
// Fonction 1 ajouterContact(contact): Ajouter un contact dans le tableau de Contacts,
// mettre a jour le tableau HTML, reinitialiser le formulaire et afficher une notification.
function ajouterContact(Contacts){}
// Fonction 2 reinitilisationDuformulaire();Apres l'ajout d'un contact, ou remet le formulaire a 0!
function reinitilisationDuformulaire(){}
// Afficher d'une notification
function afficherUneNotification(){}
// Verificationn de la presence d'un contact dans contacts
function estCeQunContactEstPresent(Contacts){}
// Verification de la validite d'un Email
function validateEmail(email){}
});         



$(function(){
    $('#contact').on('submit',function(estCeQunContactEstPresent){
        //    stop default action to send php
        event.preventDefault();
        // remove and recount
        $('.aucuncontact .nocontact').remove();
        $('#contact .alert.alert-success').remove();
        
        //   clear to prevent double action
            $('#contact .has-error').removeClass('has-error');
            $('#contact .text-danger').remove();
            $('#contact .alert.alert-danger').remove();
        // create variables
        var nom   =$("#nom");
        var prenom=$("#prenom");
        var email =$("#email");
        var tel   =$("#tel");
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
                    alert("Felicitation! Votre Contact est ajoute.")
                    // email.parent().addClass("<div class='alert alert-success'>Felicitation! Votre Contact est ajoute.</div>");
                    $(function(ajouterContact){    
                         // Insert a row in the table at the last row
                         // Find a <table> element with id="myTable":
                        var table = document.getElementById("LesContacts");

                        // Create an empty <tr> element and add it to the 1st position of the table:
                        var row = table.insertRow(1);

                        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
                        var cell1 = row.insertCell(0).append(nom.val());
                        var cell2 = row.insertCell(1).append(prenom.val());
                        var cell3 = row.insertCell(2).append(email.val());
                        var cell4 = row.insertCell(3).append(tel.val());

        })}        else{
                    $(this).prepend("<div class='alert alert-danger'>Nous n'avons pas ete en mesure de valider votre demand. Verifiez vos information.</div>");
                };

    }
    )});
    // creation of table in JS
     
                
    
    
   


