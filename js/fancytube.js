(function (){
    $(".fancytube").fancybox({
        'transitionIn' : 'elastic',
        'padding'  : 0,
        'autoScale'  : false,
        'transitionOut' : 'fade',
        'width'   : 680,
        'height'  : 495,
        'type'   : 'swf'
       });
    
       if(location.hash){
            $(location.hash).click();
       }
});