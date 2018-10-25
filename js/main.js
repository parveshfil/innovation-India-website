jQuery(document).ready(function($) {
    //scroll effect

    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

   
    //scroll on animated
    $(window).scroll(function() {
        $('.scroll-animations .animated').each(function() {
                if (isScrolledIntoView(this) === true) {

                    $(this).addClass('pulse');
                }
            }

        )
    });
    $(window).scroll(function() {
        $('.scroll-animations-fadeInUp .animated').each(function() {
                if (isScrolledIntoView(this) === true) {

                    $(this).addClass('fadeInUp');
                }
            }

        )
    });
    $(window).scroll(function() {
        $('.scrollTypewriter').each(function() {
                if (isScrolledIntoView(this) === true) {

                    $(this).addClass('typewriter');
                }
            }

        )
    });
   
    $(window).scroll(function(){

        if(  $('#inno-final').offset().top <=  $(window).scrollTop()){
            $('#pb-1').fadeOut('fast', function(){
                $('#pb-2').removeAttr('hidden').fadeIn('fast');
            });
            
        }
        if(  $('#inno-final').offset().top > $(window).scrollTop()){
           $('#pb-2').fadeOut('fast', function(){
                $('#pb-1').fadeIn('fast');
            
        });
       }
    });
    
    //counter
    $(window).scroll(function(){

        //if(  $('#counter').offset().top <=  $(window).scrollTop()){
        if(isScrolledIntoView($('#counter')) === true ){
            //coutner
            var counters = $(".count");
            var countersQuantity = counters.length;
            var counter = [];

            for (i = 0; i < countersQuantity; i++) {
                counter[i] = parseInt(counters[i].innerHTML);
            }

            var count = function(start, value, id) {
                var localStart = start;
                setInterval(function() {
                    if (localStart < value) {
                        localStart++;
                        counters[id].innerHTML = localStart;
                    }
                }, 40);
            }

            for (j = 0; j < countersQuantity; j++) {
                count(0, counter[j], j);
            }

            
        }
       
    });
    
    

    $('#lens2').ripples({
        resolution: 512,
        dropRadius: 50,
        perturbance: 10,
        interactive: true,
    });


    setInterval(function() {

        var $el = $('#lens2');
        console.log("wokriing");
        var x = Math.random() * $el.outerWidth();
        var y = Math.random() * $el.outerHeight();
        var dropRadius = 20;
        var strength = 0.10 + Math.random() * 0.04;
        $el.ripples('drop', x, y, dropRadius, strength);
    }, 100);




});