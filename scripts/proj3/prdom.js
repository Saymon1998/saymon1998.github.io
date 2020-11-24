$(document).ready(function(){
    $("body").dblclick(function(){
      alert("Double click!");
    });
    $('#n1').mouseover(function() {
        let message = "Najechałeś na mnie!";
        $('#n1').append(message);
    });
    $('#n2').click(function() {
        let message = " Kliknąłeś na mnie! ";
        $('#n2').append(message);
    });
    $("#b1").click(function()
    {
        $("#b1").html('ZOSTAŁEM KLIKNIĘTY!');
    });
    $("#b2").click(function()
    {
        let message = "Zmieniono s1 ";
        $('#main').append(message);
        $('#s1').css({backgroundColor: 'silver',fontsize:'20px'});
    });
    $("#b3").click(function(){ 
        let message = "|Zmieniono pullquote2| ";
        $('#main').append(message);
        
        $('#pullquote2').css({backgroundColor: 'yellow'});
    });
    $("#b4").click(function(){
        $('#pullquote2').css({backgroundColor: 'silver'});
        let message = "|Zmieniono pullquote 2| ";
        $('#main').append(message);
    });
    $("#b5").click(function(){
        $('#s1').css({backgroundColor: 'silver',fontsize:'20px'});
        let message = "|Zmieniono s1| ";
        $('#main').append(message);
    });
    $("#b6").click(function()
    {
        $('#lab3').css({color:'red',fontweight:'bold'});
        let message = "|Zmieniono w sekcji lab3 kolor| ";
        $('#main').append(message);
    });
    $("#b7").click(function()
    {
        $('div').addClass('button7');
        let message = "|zmieniono wage i styl czcionki w divach| ";
        $('#main').append(message);
    });
    $("#b8").click(function()
    {
        $('div').removeClass('button7');
        let message = "|usunieto klasę button 7| ";
        $('#main').append(message);
    });
    $("#b9").click(function()
    {
        $('span').addClass('button9');
        let message = "|dodaje klase button 9 zmieniającą <span>|";
        $('#main').append(message);
    });
    $("#b10").click(function()
    {
        $('span').removeClass('button9');
        $('body').addClass('button10');
        let message = "|usuwa klase button9, dodaje klase button 10 zmieniającą <body>|";
        $('#main').append(message);
    });
  });