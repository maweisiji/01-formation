//DECLARATION DE FONCTION 

function validateEmail(email){
	var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	var valid = emailReg.test(email);

	if(!valid) {
        return false;
    } else {
    	return true;
    }
}

// Initialisation de jQuery
$(function(){
    // Ecouter a quel moment est soumis notre formulaire
    // A la soumission de mon formulaire, je vais executer une fonction anonyme.
    // en JS: document.getElementById('contact').addEventListener('submit',function);
    $("#contact").on('submit',function(event){
        // Event: correspond ici a notre evenement "submit"

        // Arreter la redirection html5
        event.preventDefault();

        // Suppression des differentes erreurs
        // Je cibles tous les elements qui contiennent la class "has-error", puis je supprime ".has-error" pour ces elements.
        // Je supprime la class has-error en ciblant les elements qui ont la class "has-error" , je supprime sur les elements que je cible.
        $('#contact .has-error').removeClass('has-error');
        $('#contact .text-danger').remove();
        $('#contact .alert.alert-danger').remove();

        // Declaration des variables (champs a verifier)
        var nom   =$("#nom");
        var prenom=$("#prenom");
        var email =$("#email");
        var tel   =$("#tel");

        // Je passe a la verification de chaque champ...
            // 1. verification du nom
            if(nom.val()==""){  //or nom.val().length==0
                // si le champ est vide, alors j'ajoute a son parent, la classe has-error
                nom.parent().addClass('has-error'); 
                // Je rajoute
                $("<p class='text-danger'>N'oubliez pas de saisir votre nom</p>").appendTo(nom.parent());
               
            };
            // 2. verification du prenom
             if(prenom.val().length==0){  
                prenom.parent().addClass('has-error');
                // Je rajoute
                $("<p class='text-danger'>N'oubliez pas de saisir votre prenom</p>").appendTo(prenom.parent()); 
            }
            // 3. verification du email
            if(!validateEmail(email.val())){  
                email.parent().addClass('has-error');
                $("<p class='text-danger'>N'oubliez pas de saisir votre email</p>").appendTo(email.parent()); 
            }
            // 4. verification du tel
            if(tel.val().length==0 || $.isNumeric(tel.val())==false){  
                tel.parent().addClass('has-error');
                $("<p class='text-danger'>N'oubliez pas de saisir votre telephone</p>").appendTo(tel.parent()); 
            }

            if($(this).find('.has-error').length==0){
                $(this).replaceWith("<div class='alert alert-success'>Votre demand a bien ete envoyee! Nous vous repondrons dans les meilleurs delais.</div>");
            }else{
                $(this).prepend("<div class='alert alert-danger'>Nous n'avons pas ete en mesure de valider votre demand. Verifiez vos information.</div>");
            }
    })

});