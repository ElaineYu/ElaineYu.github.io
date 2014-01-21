$(document).ready(function(){

    $('#show').click(function(event){
       event.preventDefault();
        $("#about_braintrade_project_box").toggle();

      });
    $('#show1').click(function(event){
       event.preventDefault();
        $("#about_bootietracker_project_box").toggle();

      });

    $('#show2').click(function(event){
      event.preventDefault();
        $('.resume').toggle();
    });

});