(function ($) {
 "use strict";
 
    
    /*--
    Mobile Menu
    ------------------------*/
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "990",
        meanMenuContainer: ".mobile-menu",
        onePage: true,
    });
    
    /*--
    Magnific Popup
    ------------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        zoom: {
            enabled: true,
        }
    });
    
    
    /*--
    slick slider
    ------------------------*/
    $('.screenshot-slider').slick({
      centerMode: true,
      dots: true,
      focusOnSelect: true,
      swipeToSlide: true,
      touchMove: false,
      centerPadding: '0',
      slidesToShow: 5,
      arrows: false,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 970,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
          }
        }
      ]
    }); 
    
    /*--
    slick slider
    ------------------------*/
    $('.slider-2').slick({
      centerMode: true,
      dots: true,
      centerPadding: '0',
      slidesToShow: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 970,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    }); 
    
    /*--------------------------
    counterUp
    ---------------------------- */	
     $('.timer').counterUp({
        delay: 10,
        time: 5000
    });   
    
    /*----------------------------
    owl active brand-logo
    ------------------------------ */  
    $('.item_all').owlCarousel({
        autoPlay: false, 
        slideSpeed:2000,
        pagination:false,
        navigation:false,	  
        items : 6,
        /* transitionStyle : "fade", */    /* [This code for animation ] */
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,4],
        itemsTablet: [767,2],
        itemsMobile : [479,2],
    });
    
    /*--
    Menu Stick
    -----------------------------------*/
    if ($('.sticker')[0]){
        $('.sticker');
        $(window).scroll(function(){
            var wind_scr = $(window).scrollTop();
            var window_width = $(window).width();
            var head_w = $('.sticker').height();
            if (window_width >= 10) {
                if(wind_scr < 400){
                    if($('.sticker').data('stick') === true){
                        $('.sticker').data('stick', false);
                        $('.sticker').stop(true).animate({opacity : 0}, 300, function(){
                            $('.sticker').removeClass('stick slideDown');
                            $('.sticker').stop(true).animate({opacity : 1}, 300);
                        });
                    }
                } else {
                    if($('.sticker').data('stick') === false || typeof $('.sticker').data('stick') === 'undefined'){
                        $('.sticker').data('stick', true);
                        $('.sticker').stop(true).animate({opacity : 0},300,function(){
                            $('.sticker').addClass('stick slideDown');
                            $('.sticker.stick').stop(true).animate({opacity : 1}, 300);
                        });
                    }
                }
            }
        });
    };
    
    /*--
    One Page Nav
    -----------------------------------*/
    var top_offset = $('.main-menu').height() - -60;
    $('.main-menu nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });
    
    /*--
    Smooth Scroll
    -----------------------------------*/
    $('.scroll-down, .mean-nav ul li a').on('click', function(e) {
        e.preventDefault();
        var link = this;
        $.smoothScroll({
          offset: -100,
          scrollTarget: link.hash
        });
    });
    
    /*--------------------------
    scrollUp
    ---------------------------- */	
    $(window).on('scroll',function () {
        if($(window).scrollTop()>200) {
            $("#toTop").fadeIn();
        } else {
            $("#toTop").fadeOut();
        }
    });
    $('#toTop').on('click', function() {
        $("html,body").animate({
            scrollTop:0
        }, 500)
    });   
    
    
    /*--
     MailChimp
    ------------------------*/
    $('#mc-form').ajaxChimp({
     language: 'en',
     callback: mailChimpResponse,
     // ADD YOUR MAILCHIMP URL BELOW HERE!
     url: 'http://themeshaven.us8.list-manage.com/subscribe/post?u=759ce8a8f4f1037e021ba2922&amp;id=a2452237f8'
    });
    function mailChimpResponse(resp) {
     if (resp.result === 'success') {
      $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
      $('.mailchimp-error').fadeOut(400);
     } else if(resp.result === 'error') {
      $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
     }  
    }
    
    /*----------------------------
        home-slider
    ------------------------------ */  
    $(".slider-active").owlCarousel({
        autoPlay: false, 
        slideSpeed:2000,
        pagination:false,
        navigation:true,	  
        items : 1,
        /* transitionStyle : "fade", */    /* [This code for animation ] */
        navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [767,1],
        itemsMobile : [479,1],
    });
    
    /*----------------------------
        text-animation
    ------------------------------ */  
    $('.tlt1').textillate({
      loop: true,
      in: {
        effect: 'fadeInDown',
      },
      out: {
        effect: 'flip',
      },
    });
    
    /*----------------------------
        text-animation
    ------------------------------ */  
    $('.tlt').textillate({
      loop: true,
      in: {
        effect: 'fadeInRight',
      },
      out: {
        effect: 'fadeOutLeft',
      },
    });
    
    /*----------------------------
    video
    ------------------------------ */      
    $('.video-bg').vide({
      mp4: 'video/iphone7',
      webm: 'video/iphone7',
      poster: 'video/banner',
    }, {
        posterType: 'jpg',
        className: 'video-container'
    });    
 
    /*----------------------------
    kenburne
    ------------------------------ */   
    $('.slide-kenburne').kenburnsy({
      fullscreen: true
    });
    
    /*----------------------------
    youtube video
    ------------------------------ */     
    $('.youtube-bg').YTPlayer({
        videoURL:"r4dD-WYzrMs",
        containment:'.youtube-bg',
        autoPlay:true,
        loop:true,
    });    

    /*----------------------------
    owl active brand-logo
    ------------------------------ */  
    $('.slider-img').owlCarousel({
        autoPlay: false, 
        slideSpeed:2000,
        pagination:true,
        navigation:false,	  
        items : 1,
        /* transitionStyle : "fade", */    /* [This code for animation ] */
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [767,1],
        itemsMobile : [479,1],
    });    
    

    
    
    
    //venbox start
    $('.venobox').venobox({
        numeratio: true,
        titleattr: 'data-title'
    })
    //venbox end
    
    
    
    
    
    
    
    
    
    
 
})(jQuery); 

