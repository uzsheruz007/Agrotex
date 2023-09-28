/*
 Theme Name: Organia
 Theme URI: https://themeforest.net/user/themewar/portfolio
 Author: themewar
 Author URI: 
 Description: Organia - Organic Foods Store Responsive HTML5 Template
 Version: 1.0
 License:
 License URI:
*/
 
/*=======================================================================
 [Table of contents]
 =========================================================================
 1. Init Obj
 2. All Carousel
 3. Skills
 4. Stretch Column
 5. Fun Fact Count
 6. Back To Top
 7. All PopUP
 8. Sticky Header
 9. Mobile Menu
 10. Preloader
 11. Count Down
 12. Select
 13. Price Slider
 14. Product Sub Category
 15. Qty
 16. Google Map
 17. Contact Form Submission
 18. All Filter & Suffle
*/

(function ($) {
    'use strict';
    /*--------------------------------------------------------
    / 1. Init Obj
    /---------------------------------------------------------*/
    var cateSlider              = $('.cateSlider'),
        tab_slider              = $('.tab-slider'),
        tab_slider02            = $('.tab-slider02'),
        offer_slider            = $('.offer-slider'),
        relatedPost             = $(".relatedPostSlider"),
        discoutSlider           = $(".discout-slider"),
        gallery_sliders         = $(".gallery_sliders"),
        related_carousel        = $(".related_carousel"),
        popup_video             = $('.popup_video'),
        popup_img               = $('.popup_img'),
        funfact                 = $('.funfact'),
        countdown_three         = $('.countdown_dashboard_three'),
        countdown_two           = $('.countdown_dashboard_two'),
        select                  = $('.search-category select, .sorting select, .filterBy select, .weight_quantity select'),
        slider_range            = $("#slider-range"),
        countdown               = $('.countdown_dashboard');
    
    /*--------------------------------------------------------
    / 2. Rev Slider
    /---------------------------------------------------------*/
    var revapi = jQuery('#rev_slider_1').show().revolution({
        delay: 6000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1140, 920, 700, 380],
        jsFileLocation: "js/",
        sliderLayout: "auto",
        minHeight: '810',
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            arrows: {
                style: "custom",
                enable: true,
                hide_onmobile: true,
                hide_under: 600,
                hide_onleave: false,
                tmp: '',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 125,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 125,
                    v_offset: 0
                }
            },
            bullets: {
                enable: false
            }
        },
    });
    var revapi = jQuery('#rev_slider_2').show().revolution({
        delay: 6000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1140, 920, 700, 380],
        jsFileLocation: "js/",
        sliderLayout: "auto",
        minHeight: '862',
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            arrows: {
                style: "custom",
                enable: true,
                hide_onmobile: true,
                hide_under: 600,
                hide_onleave: false,
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 55,
                    v_offset: 0 
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 55,
                    v_offset: 0
                }
            },
            bullets: {
                enable: false
            }
        },
    });
    var revapi = jQuery('#rev_slider_3').show().revolution({
        delay: 6000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1140, 920, 700, 380],
        jsFileLocation: "js/",
        sliderLayout: "auto",
        minHeight: '825',
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            bullets: {
                enable: true,
                style: 'metis',
                h_align: "right",
                v_align: "bottom",
                h_offset: 290,
                hide_onleave: false,
                v_offset: 60,
                space: 15,
                tmp: '<span class="tp-bullet-img-wrap"><span class="tp-bullet-image"></span></span>'
            },
            arrows: {
                enable: false,
            }
        },
    });
    var revapi = jQuery('#rev_slider_4').show().revolution({
        delay: 6000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1140, 920, 700, 380],
        jsFileLocation: "js/",
        sliderLayout: "auto",
        minHeight: '958',
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            arrows: {
                style: "custom",
                enable: false,
            },
            bullets: {
                enable: false,
            }
        },
        parallax: {
            type: 'mouse+scroll',
            origo: 'slidercenter',
            speed: 400,
            levels: [5,10,15,20,25,30,35,40,
                     45,46,47,48,49,50,51,55],
            disable_onmobile: 'on'
        }
    });
    var revapi = jQuery('#rev_slider_5').show().revolution({
        delay: 6000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1140, 920, 700, 380],
        jsFileLocation: "js/",
        sliderLayout: "auto",
        minHeight: '550',
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            arrows: {
                style: "custom",
                enable: true,
                hide_onleave: false,
                left: {
                    h_align: "right",
                    v_align: "bottom",
                    h_offset: 92,
                    v_offset: 25 
                },
                right: {
                    h_align: "right",
                    v_align: "bottom",
                    h_offset: 25,
                    v_offset: 25
                }
            },
            bullets: {
                enable: false,
            }
        },
        parallax: {
            type: 'mouse+scroll',
            origo: 'slidercenter',
            speed: 400,
            levels: [5,10,15,20,25,30,35,40,
                     45,46,47,48,49,50,51,55],
            disable_onmobile: 'on'
        }
    });
    /*--------------------------------------------------------
    / 2. All Carousel
    /---------------------------------------------------------*/
    /*--- Category Silder ---*/
    if (cateSlider.length > 0) {
        var cateSlider_obj = cateSlider.owlCarousel({
            margin: 24,
            autoplay: false,
            loop: false,
            nav: true,
            smartSpeed: 400,
            navText: ['<i class="twi-arrow-left"></i>', '<i class="twi-arrow-right"></i>'],
            dots: false,
            items: 1,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                990: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
        cateSlider_obj.on('translated.owl.carousel', function(event) {
            checkAndSetClass('.cateSlider')
        });
        cateSlider_obj.on('initialized.owl.carousel', function(event) {
            checkAndSetClass('.cateSlider')
        });
        cateSlider_obj.on('resized.owl.carousel', function(event) {
            checkAndSetClass('.cateSlider')
        });
    }
    if($('.categorySlider').length > 0){
        var categorySliderObj = $('.categorySlider').owlCarousel({
            autoplay: false,
            loop: true,
            margin: 10,
            responsiveClass: true,
            nav: true,
            navText: ['<i class="twi-arrow-left"></i>', '<i class="twi-arrow-right"></i>'],
            dots: false,
            smartSpeed: 600,
            items: 5,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                750: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                },
            }
        });
    }
        
    function checkAndSetClass(selector){
        var total = $(selector+' .owl-stage .owl-item.active').length;
        $(selector+' .owl-stage .owl-item .cateItem').removeClass('odd even');

        var i = 1;
        $(selector+' .owl-stage .owl-item.active').each(function(index){
            if(i % 2 == 0){
                $('.cateItem', this).addClass('even');
            }else{
                $('.cateItem', this).addClass('odd');
            }
            i++;
        });
    }
    /*--- Tab Silder ---*/
    if(tab_slider.length > 0){
        var tab_slider_obj = tab_slider.owlCarousel({
            autoplay: false,
            loop: false,
            margin: 27,
            responsiveClass: true,
            nav: true,
            navText: ['<i class="twi-arrow-left"></i>', '<i class="twi-arrow-right"></i>'],
            dots: false,
            smartSpeed: 600,
            items: 3,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                992: {
                    items: 3
                },
            }
        });
        $('.filterMenu').on('click', '.filter_item', function(e) {
            e.preventDefault();
            var slider_height = tab_slider.height();
            tab_slider.parent().css('min-height', slider_height+'px');
            var $item = $(this);
            var filter = $item.data( 'owl-filter' );
            $('.filterMenu .filter_item').removeClass('active');
            $item.addClass('active');
            tab_slider_obj.owlcarousel2_filter( filter );
        })
    }
    if(tab_slider02.length > 0){
        var tab_slider02_obj = tab_slider02.owlCarousel({
            autoplay: true,
            loop: false,
            margin: 30,
            responsiveClass: true,
            nav: false,
            dots: false,
            smartSpeed: 600,
            items: 3,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                },
            }
        });
        $('.filterMenu02').on('click', '.filter_item', function(e) {
            e.preventDefault();
            var slider_height = tab_slider02.height();
            tab_slider02.parent().css('min-height', slider_height+'px');
            var $item = $(this);
            var filter = $item.data( 'owl-filter' );
            $('.filterMenu02 .filter_item').removeClass('active');
            $item.addClass('active');
            tab_slider02_obj.owlcarousel2_filter( filter );
        })
    }
    if(offer_slider.length > 0){
        var offer_slider_obj = offer_slider.owlCarousel({
            autoplay: false,
            loop: true,
            margin: 19,
            responsiveClass: true,
            nav: true,
            navText: ['<i class="twi-arrow-left"></i>', '<i class="twi-arrow-right"></i>'],
            dots: false,
            smartSpeed: 600,
            items: 3,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                992: {
                    items: 3
                },
            }
        });
    }
    /*--- Client Silder ---*/
    if($(".client-slider").length > 0){
       $('.client-slider').owlCarousel({
            autoplay: true,
            loop: true,
            margin: 32,
            responsiveClass: true,
            nav: false,
            dots: true,
            smartSpeed: 600,
            items: 3,
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 3,
                    margin: 20
                },
                992: {
                    items: 3,
                    margin: 25
                },
                1600: {
                    margin: 32
                },
            }
        });
    }
    /*--- Client Silder 02 ---*/
    if($(".client-slider-02").length > 0){
       $('.client-slider-02').owlCarousel({
            autoplay: true,
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            dots: false,
            smartSpeed: 600,
            items: 5,
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                },
            }
        });
    }
    /*--- Client Silder 03 ---*/
    if($(".client-slider-03").length > 0){
       $('.client-slider-03').owlCarousel({
            autoplay: true,
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            dots: false,
            smartSpeed: 600,
            items: 6,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 5
                },
                1200: {
                    items: 6
                },
            }
        });
    }
    /*--- Product Silder ---*/
    if($(".productSlider01").length > 0){
       $('.productSlider01').owlCarousel({
            autoplay: true,
            loop: true,
            margin: 30,
            responsiveClass: true,
            nav: true,
            navText: ['<i class="twi-arrow-left"></i>', '<i class="twi-arrow-right"></i>'],
            dots: false,
            smartSpeed: 600,
            items: 3,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 3
                },
            }
        });
    }
    if($(".productSlider02").length > 0){
       $('.productSlider02').owlCarousel({
            autoplay: false,
            loop: true,
            margin: 27,
            responsiveClass: true,
            nav: true,
            navText: ['<i class="twi-arrow-left"></i>', '<i class="twi-arrow-right"></i>'],
            dots: false,
            smartSpeed: 600,
            items: 4,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                },
            }
        });
    }
    if($(".productSlider03").length > 0){
       $('.productSlider03').owlCarousel({
            autoplay: false,
            loop: true,
            margin: 37,
            responsiveClass: true,
            nav: true,
            navText: ['<i class="twi-arrow-left"></i>', '<i class="twi-arrow-right"></i>'],
            dots: false,
            smartSpeed: 600,
            items: 3,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
            }
        });
    }
    if($(".dealSlider").length > 0){
       $('.dealSlider').owlCarousel({
            autoplay: true,
            loop: false,
            margin: 0,
            responsiveClass: true,
            nav: true,
            navText: ['<i class="twi-arrow-left"></i>', '<i class="twi-arrow-right"></i>'],
            dots: false,
            smartSpeed: 600,
            items: 1,
        });
    }
    if($('.proCustomSLider').length > 0){
        var procusObj = $('.proCustomSLider').owlCarousel({
            autoplay: false,
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: true,
            navText: ['<i class="twi-arrow-left"></i>', '<i class="twi-arrow-right"></i>'],
            dots: false,
            smartSpeed: 600,
            items: 5,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                },
            }
        });
    }
    /*--- Tesimonial Silder 01 ---*/
    if ($('.testicontent01').length > 0) {
        $('.testicontent01').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            asNavFor: '.testimonialNav',
            autoplay: false
        });
        $('.testimonialNav').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.testicontent01',
            dots: false,
            arrows: false,
            variableWidth: true,
            autoplay: false,
            infinite: true,
            centerMode: true,
            centerPadding: '0',
            focusOnSelect: true,
            responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3
              }
            },
          ]
        });
    }
    if($(".testimonial02").length > 0){
       $('.testimonial02').owlCarousel({
            autoplay: true,
            loop: true,
            margin: 0,
            responsiveClass: true,
            dots: true,
            nav: false,
            //navText: ['<i class="twi-arrow-left"></i>', '<i class="twi-arrow-right"></i>'],
            smartSpeed:450,
            items: 1,
        });
    }
    /*--- Video Silder ---*/
    if($(".video-slider").length > 0){
       $('.video-slider').owlCarousel({
            autoplay: true,
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: true,
            navText: ['<i class="twi-arrow-left"></i>', '<i class="twi-arrow-right"></i>'],
            dots: false,
            animateOut: 'slideOutDown',
            animateIn: 'zoomIn',
            smartSpeed:450,
            items: 1,
        });
    }
    if($(".video-slider02").length > 0){
       $('.video-slider02').owlCarousel({
            autoplay: true,
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: true,
            navText: ['<i class="twi-arrow-left"></i>', '<i class="twi-arrow-right"></i>'],
            dots: false,
            animateOut: 'slideOutDown',
            animateIn: 'zoomIn',
            smartSpeed:450,
            items: 1,
        });
    }
    /*--- Product Ads Silder ---*/
    if($(".ads-slider").length > 0){
       $('.ads-slider').owlCarousel({
            autoplay: true,
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: true,
            navText: ['<i class="twi-angle-left"></i>', '<i class="twi-angle-right"></i>'],
            dots: false,
            smartSpeed:450,
            items: 1,
        });
    }
    /*-- Related Post Slider --*/
    if(relatedPost.length > 0){
        var relatedPost_obj = relatedPost.owlCarousel({
            margin: 22,
            loop: false,
            nav: false,
            dots: false,
            items: 2,
            smartSpeed:450,
            responsiveClass:true,
            responsive:{
                0:{
                    items: 1
                },
                768:{
                    items: 2
                },
                1200:{
                    items: 3
                }
            }
        });
    }
    /*-- Related Post Slider --*/
    if(discoutSlider.length > 0){
        var discoutSlider_obj = discoutSlider.owlCarousel({
            margin: 0,
            loop: true,
            nav: true,
            navText: ['<i class="twi-arrow-left"></i>', '<i class="twi-arrow-right"></i>'],
            dots: false,
            items: 1,
            smartSpeed: 700,
            responsiveClass:true,
        });
    }

    /*-- Product Gallery Slider --*/
    if ($('.productSlide').length > 0) {
        $('.productSlide').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            infinite: true,
            centerMode: true,
            asNavFor: '.indicator-slider',
            centerPadding: '0'
        });
        $('.indicator-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.productSlide',
            dots: false,
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            focusOnSelect: true
        });
    }

    /*-- Product Gallery Slider --*/
    if ($('.productSlide02').length > 0) {
        $('.productSlide02').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            infinite: true,
            centerMode: true,
            asNavFor: '.indicator-slider02',
            centerPadding: '0'
        });
        $('.indicator-slider02').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.productSlide02',
            dots: false,
            arrows: false,
            centerMode: false,
            centerPadding: '0',
            focusOnSelect: true,
            responsive: [
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 4
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 5
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 4
              }
            },
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 3
              }
            }
          ]
        });
    }
    $(window).on('load', function () {
        var $activeID   = $('.org_pro_tab li a.active').attr('href');
        var $sliderMain = $($activeID+'-slider');
        var $sliderNav  = $($activeID+'-thumb');
        if ($sliderMain.length > 0) {
            $sliderMain.slick({
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                infinite: true,
                centerMode: true,
                asNavFor: $sliderNav,
                centerPadding: '0'
            });
            $sliderNav.slick({
                vertical: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: $sliderMain,
                verticalSwiping: true,
                dots: false,
                arrows: false,
                centerMode: true,
                centerPadding: '0',
                focusOnSelect: true,
                responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    vertical: false,
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 450,
                  settings: {
                    vertical: false,
                    slidesToShow: 3
                  }
                }
                ]
            });
        }
        $('.org_pro_tab a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            var tergets = e.target.hash;
            var prevTarges = e.relatedTarget.hash;
            
            var $sliderMain = $(tergets).find(tergets+'-slider');
            var $sliderNav = $(tergets).find(tergets+'-thumb');
            
            var $sliderMainPrev = $(prevTarges).find(prevTarges+'-slider');
            var $sliderNavPrev = $(prevTarges).find(prevTarges+'-thumb');
            if($sliderMainPrev.length > 0){
                $sliderMainPrev.slick('destroy');
                $sliderNavPrev.slick('destroy');
            }
            
            if($sliderMain.length > 0){
                $sliderMain.slick({
                    autoplay: true,
                    autoplaySpeed: 3000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                    infinite: true,
                    asNavFor: $sliderNav
                });
                $sliderNav.slick({
                    vertical: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    asNavFor: $sliderMain,
                    verticalSwiping: true,
                    dots: false,
                    arrows: false,
                    focusOnSelect: true,
                    responsive: [
                    {
                      breakpoint: 767,
                      settings: {
                        vertical: false,
                        slidesToShow: 3
                      }
                    },
                    {
                      breakpoint: 450,
                      settings: {
                        vertical: false,
                        slidesToShow: 3
                      }
                    }
                    ]
                });
            }
        });
    });
    /*if ($('.progallerySLider').length > 0) {
        $('.progallerySLider').slick({
            autoplay: false,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            infinite: false,
            centerMode: true,
            asNavFor: '.proGallerySliderThumb',
            centerPadding: '0'
        });
        $('.proGallerySliderThumb').slick({
            vertical: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.progallerySLider',
            verticalSwiping: true,
            dots: false,
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            focusOnSelect: true,
            responsive: [
            {
              breakpoint: 767,
              settings: {
                vertical: false,
                slidesToShow: 3
              }
            },
            {
              breakpoint: 450,
              settings: {
                vertical: false,
                slidesToShow: 3
              }
            }
            ]
        });
        $('.orgoTab05 a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
           var targets = e.target;
           var prevTargets = e.relatedTarget;
           $(targets+' .progallerySLider').slick('unslick').slick('reinit');
           $(targets+' .proGallerySliderThumb').slick('unslick').slick('reinit');
        });
    }*/
    /*-- Related Product Slider --*/
    if(related_carousel.length > 0){
        var related_carousel_obj = related_carousel.owlCarousel({
            margin: 26,
            loop: false,
            dots: false,
            nav: true,
            navText: ['<i class="twi-arrow-left"></i>', '<i class="twi-arrow-right"></i>'],
            items: 4,
            responsiveClass:true,
            responsive:{
                0:{
                    items: 1
                },
                768:{
                    items: 2
                },
                991:{
                    items: 3
                },
                1200:{
                    items: 4
                }
            }
        });
    }
    /*--- Related Product Slider ---*/
    if($(".related_carousel02").length > 0){
       $('.related_carousel02').owlCarousel({
            autoplay: true,
            loop: true,
            margin: 30,
            responsiveClass: true,
            nav: true,
            navText: ['<i class="twi-arrow-left"></i>', '<i class="twi-arrow-right"></i>'],
            dots: false,
            smartSpeed: 600,
            items: 3,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 3
                },
            }
        });
    }
    /*--------------------------------------------------------
    / 3. Skills
    /----------------------------------------------------------*/
    if ($(".single_skill").length > 0){
        $('.single_skill').appear();
        $('.single_skill').on('appear', loadSkills);
    }
    var coun = true;
    function loadSkills(){
        $(".single_skill").each(function () {
            var datacount = $(this).attr("data-parcent");
            $(".ss_child", this).animate({'width': datacount + '%'}, 2000);
            $(".ss_parent span", this).animate({'left': datacount + '%'}, 2000);
            if (coun){
                $(this).find('.ss_parent span').each(function () {
                    var $this = $(this);
                    $({Counter: 0}).animate({Counter: datacount}, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter) + '%');
                        }
                    });
                });
            }
        });
        coun = false;
    }
    
    /*--------------------------------------------------------
    / 4. Stretch Column
    /---------------------------------------------------------*/
    tw_stretch();
    function tw_stretch() {
        var i = $(window).width();
        $(".row .tw-stretch-element-inside-column").each(function () {
            var $this = $(this),
                row = $this.closest(".row"),
                cols = $this.closest('[class^="col-"]'),
                colsheight = $this.closest('[class^="col-"]').height(),
                rect = this.getBoundingClientRect(),
                l = row[0].getBoundingClientRect(),
                s = cols[0].getBoundingClientRect(),
                r = rect.left,
                d = i - rect.right,
                c = l.left + (parseFloat(row.css("padding-left")) || 0),
                u = i - l.right + (parseFloat(row.css("padding-right")) || 0),
                p = s.left,
                f = i - s.right,
                styles = {
                    "margin-left": 0,
                    "margin-right": 0
                };
            if (Math.round(c) === Math.round(p)) {
                var h = parseFloat($this.css("margin-left") || 0);
                styles["margin-left"] = h - r;
            }
            if (Math.round(u) === Math.round(f)) {
                var w = parseFloat($this.css("margin-right") || 0);
                styles["margin-right"] = w - d;
            }
            $this.css(styles);
        });
    }
    
    /*--------------------------------------------------------
    / 5. Fun Fact Count
    /---------------------------------------------------------*/
    $('.funfact').appear();
    $(document.body).on('appear', '.funfact', function(e, $affected) {
        $affected.each(function() {
            var $this = $(this);
            if(!$this.hasClass('appeared')){
                jQuery({Counter: 0}).animate({Counter: $this.attr('data-count')}, {
                    duration: 3000,
                    easing: 'swing',
                    step: function () {
                        var num = Math.ceil(this.Counter).toString();
                          if (Number(num) > 999) {
                             while (/(\d+)(\d{3})/.test(num)) {
                                num = num.replace(/(\d+)(\d{3})/, '<span class="count-span">' + '$1' + ',</span>' + '$2');
                             }
                          }
                        $('.counter', $this).html(num);
                    }
                });
                $this.addClass('appeared');
            }
        });
    });
    
    /*--------------------------------------------------------
    / 6. Back To Top
    /---------------------------------------------------------*/
    var back = $("#backtotop"),
        body = $("body, html");
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height()) {
            back.css({bottom: '30px', opacity: '1', visibility: 'visible'});
        } else {
            back.css({bottom: '-30px', opacity: '0', visibility: 'hidden'});
        }
    });
    body.on("click", "#backtotop", function (e) {
        e.preventDefault();
        body.animate({scrollTop: 0}, 800);
        return false;
    });
    
    /*--------------------------------------------------------
    / 7. All PopUP
    /--------------------------------------------------------*/
    popup_video.lightcase({
        transition: 'elastic',
        showSequenceInfo: false,
        slideshow: false,
        swipe: true,
        showTitle: false,
        showCaption: false,
        controls: true
    });
    popup_img.lightcase({
        transition: 'elastic',
        showSequenceInfo: false,
        slideshow: true,
        swipe: true,
        showTitle: false,
        controls: true
    });
    
    /*--------------------------------------------------------
    / 8. Sticky Header
    /---------------------------------------------------------*/
    if ($(".isSticky").length > 0) {
        var header_height = $(".isSticky").height();
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 300) {
                $(".isSticky").addClass('fixedHeader animated slideInDown');
                $('.categorie-list').slideUp();
            } else {
                $(".isSticky").removeClass('fixedHeader animated slideInDown');
                if($('.isSticky').hasClass('header03') && !$('body').hasClass('innerPage')){
                    $('.categorie-list').slideDown();
                }
            }
        });
    }
    
    /*--------------------------------------------------------
    / 9. Mobile Menu
    /---------------------------------------------------------*/
    $(document).on('click', '.menuToggler', function (e) {
        e.preventDefault();
        $('.sidebarMenu').toggleClass('active');
        $(this).toggleClass('active');
    });
    $('.sidebarMenuOverlay, .SMACloser').on('click', function () {
        $('.sidebarMenu').removeClass('active');
        $('.menuToggler').removeClass('active');
    });
    $('.SMABody ul li.menu-item-has-children > a').on('click', function (e) {
        e.preventDefault();
        $(this).parent('li.menu-item-has-children').toggleClass('active');
        $(this).siblings('ul.sub-menu').slideToggle();
    });
    
    /*--------------------------------------------------------
    / 10. Preloader
    /---------------------------------------------------------*/
    $(window).on('load', function () {
        var preload = $('.preloader');
        if (preload.length > 0) {
            preload.delay(800).fadeOut('slow');
        }
    });

    /*--------------------------------------------------------
    / 11. Count Down
    /----------------------------------------------------------*/
    if (countdown.length > 0) {
        var d = countdown.attr('data-day');
        var m = countdown.attr('data-month');
        var y = countdown.attr('data-year');
        countdown.countdown({
            until: new Date(y, m - 1, d),
            format: 'DHMS'
        });
    }
    if (countdown_two.length > 0) {
        var d = countdown_two.attr('data-day');
        var m = countdown_two.attr('data-month');
        var y = countdown_two.attr('data-year');
        countdown_two.countdown({
            until: new Date(y, m - 1, d),
            format: 'DHMS'
        });
    }
    if (countdown_three.length > 0) {
        var d = countdown_three.attr('data-day');
        var m = countdown_three.attr('data-month');
        var y = countdown_three.attr('data-year');
        countdown_three.countdown({
            until: new Date(y, m - 1, d),
            format: 'HMS'
        });
    }
    /*--------------------------------------------------------
    / 12. Select
    /---------------------------------------------------------*/
    if (select.length > 0) {
        select.niceSelect();
        select.parent().addClass('select-area');
    };
    /*--------------------------------------------------------
    / 13. Price Slider
    /----------------------------------------------------------*/
    if (slider_range.length > 0) {
        slider_range.slider({
            range: true,
            min: 1,
            max: 4000,
            values: [200, 3450],
            slide: function (event, ui) {
                $("#amount").html("$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ]);
            }
        });
        $("#amount").html("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));
    }
    /*--------------------------------------------------------
    / 14. Product Sub Category
    /----------------------------------------------------------*/
    if ($(".sidebar .custom_categories").length > 0){
        $('.widget_sub_categories > a').on('click', function (e) {
            e.preventDefault();
            $(this).next('.widget_dropdown_categories').slideToggle();
            $(this).parent().toggleClass('active');
        });
    }
    /*--------------------------------------------------------
    / 15. Qty
    /----------------------------------------------------------*/
    if ($(".qtyBtn").length > 0) {
        $(".btnMinus").on('click', function() {
            var vals = parseInt($(this).next(".carqty").val(), 10);
            if (vals > 1) {
                vals -= 1;
                $(this).next(".carqty").val(vals).trigger('change');
            } else {
                $(this).next(".carqty").val(vals).trigger('change');
            }
            return false;
        });
        $(".btnPlus").on('click', function() {
            var vals = parseInt($(this).prev(".carqty").val(), 10);
            vals += 1;
            $(this).prev(".carqty").val(vals).trigger('change');
            return false;
        });
    }
    
    /*--------------------------------------------------------
    / 16. Google Maps
    /----------------------------------------------------------*/
    if ($("#googleMap").length > 0){
        var map;
        map = new GMaps({
            el: "#googleMap",
            lat: -37.815340,
            lng: 144.963230,
            zoom: 10,
        });
        var image = "";
        map.addMarker({
            lat: -37.815340,
            lng: 144.963230,
            icon: "assets/images/marker.png",
            animation: google.maps.Animation.DROP,
            verticalAlign: "bottom",
            horizontalAlign: "center",
            backgroundColor: "#d3cfcf"
        });
        var styles = [
            {
                "featureType": "road",
                "stylers": [
                    {"color": "#9dbb91"}
                ]
            }, {
                "featureType": "water",
                "stylers": [
                    {"color": "#aacbd9"}
                ]
            }, {
                "featureType": "landscape",
                "stylers": [
                    {"color": "#ebf1e9"}
                ]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [
                    {"color": "#2c2c2c"}
                ]
            }, {
                "featureType": "poi",
                "stylers": [
                    {"color": "#ceddc8"}
                ]
            }, {
                "elementType": "labels.text",
                "stylers": [
                    {"saturation": 1},
                    {"weight": 0.1},
                    {"color": "#2c2c2c"}
                ]
            }

        ];
        map.addStyle({
            styledMapName: "Styled Map",
            styles: styles,
            mapTypeId: "map_style"
        });

        map.setStyle("map_style");
    }

    /*--------------------------------------------------------
    / 17. Contact Form Submission
    /---------------------------------------------------------*/
    $('#contact_form').on('submit', function (e) {
        e.preventDefault();
        var $this = $(this);

        $('button[type="submit"]', this).attr('disabled', 'disabled').val('Processing...');
        var form_data = $this.serialize();

        var required = 0;
        $(".required", this).each(function () {
            if ($(this).val() === ''){
                $(this).addClass('reqError');
                required += 1;
            } else{
                if ($(this).hasClass('reqError'))
                {
                    $(this).removeClass('reqError');
                    if (required > 0)
                    {
                        required -= 1;
                    }
                }
            }
        });

        if (required === 0) {
            $.ajax({
                type: 'POST',
                url: 'mail/mail.php',
                data: {form_data: form_data},
                success: function (data) {
                    $('button[type="submit"]', $this).removeAttr('disabled').val('Message');

                    $('.con_message', $this).fadeIn().html('<strong>Congratulations!</strong> Your query successfully sent to site admin.').removeClass('alert-warning').addClass('alert-success');
                    setTimeout(function () {
                        $('.con_message', $this).fadeOut().html('').removeClass('alert-success alert-warning');
                    }, 5000);
                }
            });
        } else {
            $('button[type="submit"]', $this).removeAttr('disabled').val('Message');
            $('.con_message', $this).fadeIn().html('<strong>Opps!</strong> Error found. Please fix those and re submit.').removeClass('alert-success').addClass('alert-warning');
            setTimeout(function () {
                $('.con_message', $this).fadeOut().html('').removeClass('alert-success alert-warning');
            }, 5000);
        }

    });
    $(".required").on('keyup', function () {
        $(this).removeClass('reqError');
    });
    /*--------------------------------------------------------
    / 18. All Filter & Suffle
    /---------------------------------------------------------*/
    if ($(".shaff_grid").length > 0){
        var $grid = $('.shaff_grid');
        
        var Shuffle = window.Shuffle;
        var element = document.querySelector('.shaff_grid');
        var sizer = element.querySelector('.shafSizer');

        var shaff_inst = new Shuffle(element, {
          itemSelector: '.shaff_item',
          sizer: sizer // could also be a selector: '.my-sizer-element'
        });
        $('.shaff_filter li').on('click', function() {
            $('.shaff_filter li').removeClass('active');
            $(this).addClass('active');
            var groupName = $(this).attr('data-group');
            shaff_inst.filter(groupName);
            
            if($grid.hasClass('hasRoundedCorner')){
                shaff_inst.on(Shuffle.EventType.LAYOUT, function () {
                    $('.hasRoundedCorner .shaff_item').removeClass('odd even');
                    var i = 1;
                    $('.hasRoundedCorner .shaff_item.shuffle-item--visible').each(function(){
                        if(i % 2 == 0){
                            $(this).addClass('even');
                        }else{
                            $(this).addClass('odd')
                        }
                        i++;
                    })
                });
            }
        });
    }
    $(window).on('load', function() {
        if ($(".grid").length > 0) {
            $('.grid').masonry({
                itemSelector: '.grid-item'
            });
        }
    });
    
    $('.categoryToggle').on('click', function(e){
        e.preventDefault();
        $(this).siblings('.categorie-list').slideToggle();
    });

})(jQuery);
function searchView() {
    $('.header01SearchBar').slideToggle();
    $('.searchBtn').toggleClass('active');
}