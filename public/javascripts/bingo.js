$(function(){
    var colors = ['#E67E22','#E74C3C','#7F8C8D','#8E44AD','#2980B9','#27AE60','#F39C12','#1ABC9C'];
    var colorstart = Math.floor(Math.random()*colors.length);
    var numobj={};
    $('.num').click(function(e){
        console.log($(this).children('b').html(),$(this));
        if($(this).children('b').html()!=$('#generator').html())
            return false;
        numobj[$(this).attr('id').split('cell')[1]]=$(this).children('b').html();
        if($(this).css('background-color')=='rgba(0, 0, 0, 0)')
        $(this).css('background',colors[colorstart++%colors.length])
    console.log($(this),numobj);
    })
    var socket = io.connect('http://127.0.0.1:3000');
    socket.on('no',function(num){
       console.log(num.code,arguments);
        $('#generator').html(num.code)
    })
});