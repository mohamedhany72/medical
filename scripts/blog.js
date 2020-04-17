window.addEventListener('load', function() {

    /*------------------------------ MY VARIABLES -------------------------------*/
    //side nav variables
    const burger = $('.burger');
    const sideNav = $(".side-navabar");
    const pageOverLay = $(".page-overlay");
    
    
    /*------------------------------ MY FUNCTIONS -------------------------------*/
    //side nav functions
    burger.click(function(){
        if(burger.hasClass('open')){
            burger.removeClass('open');
            sideNav.removeClass('open-side-nav');
            pageOverLay.removeClass('page-overlay-open');
        } else {
            burger.addClass('open');
            sideNav.addClass("open-side-nav");
            pageOverLay.addClass('page-overlay-open');
        };
    })
    pageOverLay.click(function(){
        if(burger.hasClass('open')){
            burger.removeClass('open');
            sideNav.removeClass('open-side-nav');
            pageOverLay.removeClass('page-overlay-open');
        } else {
            burger.addClass('open');
            sideNav.addClass("open-side-nav");
            pageOverLay.addClass('page-overlay-open');
        };
    })
    
    
    
    //change the background color of large screen navbar
    $(window).scroll(function(){
        var sc = $(window).scrollTop();
        if (sc > 100){
            $(".wide-nav").addClass("sticky");
            $(".wide-nav .brand img").attr('src', "../images/logo2.png");

            $(".side-nav").addClass("side-nav-sticky");
        }else{
            $(".wide-nav").removeClass("sticky");
            $(".wide-nav .brand img").attr('src', "../images/logo.png");

            $(".side-nav").removeClass("side-nav-sticky");
        }
    });
    
   
    /*------------------------------ MY IMPEDED FUNCTIONS -------------------------------*/
    
    var swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    
    
    
    
    /*------------------------------ MY TRIAL FUNCTIONS -------------------------------*/

    const player = new Plyr('#player',{
        controls: ['play-large', 'play', 'progress', 
                    'current-time', 'mute', 'volume', 'captions', 
                    'settings', 'pip', 'airplay', 'fullscreen'],
        settings: ['captions', 'quality', 'speed', 'loop'],
        quality: {
            default: 576, options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240]
        },
    });
})
    