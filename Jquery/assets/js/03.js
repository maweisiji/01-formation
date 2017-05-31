 /*LE CHAINAGE DE METHODES JQUERY*/
 $(function(){
    //  Je souhaite cacher toutes les div de ma page HTML
    $("div").hide('slow',function(){
        // Une fois que la methode hide() est termine, mon alerte peux s'exectuer.
    alert('fin du hide');
        // note bien: La fonction s'executer pour l'ensemble des elements du selecteur.
    // --CSS
    $('div').css('background','yellow');
    $('div').css('color','red');
    // Je fais reapparaitre mes DIVs
    $('div').show();

    }); //--Fin fonction anonyme
// En utilisant le chaingage de methode, vous pouvez faire s'enchainer plusieurs
// fonctoin les unes apres les autres...hide can be followed by time periodL1000=1s
    $('p').hide(2000).css('color','blue').css('font-size','20px').delay(1000).show(500);

// --mais, c'est encore trop long....
    $('p').hide(2000).css({'color':'blue','font-size':'20px'}).delay(1000).show(500);
 })

