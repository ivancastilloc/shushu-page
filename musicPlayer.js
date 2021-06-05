$(document).ready( function(){

    document.querySelector("#song1").play();

    setTimeout(function(){
        document.querySelector("#song2").play(); 

     }, 180000);

});