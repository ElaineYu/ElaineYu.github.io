$(document).ready(function(){

    $('#show').click(function(event){
       event.preventDefault();
       console.log("click!");
        $("#about_braintrade_project_box").toggle();

      });
    
    $('#show1').click(function(event){
       event.preventDefault();
       console.log("click!");
        $("#about_bootietracker_project_box").toggle();

      });
});