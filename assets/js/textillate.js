$(window).scroll(function(){
    $('.tlt').textillate({ 
        initialDelay: 500,
        in: { effect: 'fadeInRightBig', shuffle: true, delay: 20 } });
    
    $('.tlt2').textillate({ 
        initialDelay: 500,
        in: { effect: 'rollIn', delay: 500 } });
});