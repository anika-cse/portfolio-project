$(document).ready(function(){

    // windows scorlling
    $(window).on('scroll',function(){
        var scrolling = $(this).scrollTop();

        if(scrolling > 610)
        {
            $('.navbar').addClass('nav-bg');
        }
        else
        {
            $('.navbar').removeClass('nav-bg');
        }
    });

    // banner-chat-slider
    $('.banner-chat-slider').slick({
        autoplay: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
    });

    // portfolio popup gallery
    $('.venobox').venobox(); 

    // fun-item counter-up
    $('.counter').counterUp({
        delay: 15,
        time: 1000
    });

    // testimonial slider
    $('.testimonial-slider').slick({
        autoplay: true,
        arrows: false,
        slidesToShow: 2,
        responsive: [
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },

            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },

            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
            },

          ]
    });

    

});