/**
 * Created by User on 29.08.2017.
 */
$(function(){

    var windowWidth = window.innerWidth,
        navLinks = $('.navbar .nav a'),
        navbarToggle = $('.navbar-toggle');

    init();

    function init() {
        if (windowWidth < 767) navLinks.on('click', toggleMobileMenu)
    }

    $('.home-slider').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        smartSpeed: 1000,
        loop: true,
        autoplay: true,
        dots: false,
        touchDrag: false,
        mouseDrag: false
    });

    function toggleMobileMenu(){
        navbarToggle.click();
    }

    $(window).on('resize', function() {
        if (window.innerWidth < 767) {
            navLinks.on('click', toggleMobileMenu);
        } else {
            navLinks.off('click', toggleMobileMenu);
        }
    });
    navLinks.click(function(e) {
        e.preventDefault();
        var elem = $($(this).attr('href'));
        if(!elem.length) return;
        elem[0].scrollIntoView();
        scrollBy(0, -80);
    });
    mixitup('.mixitup-works', {
        animation: {
            effects: 'fade translateZ(-200px)',
            duration: 500
        },
        selectors: {
            control: '[data-mixitup-control]'
        }
    });

    $('.ham-bxslider').bxSlider({
        pagerCustom: '#ham-bx-pager',
        nextSelector: '#ham-testimonials-next',
        prevSelector: '#ham-testimonials-prev',
        nextText: '<i class="finicon-arrow-right"></i>',
        prevText: '<i class="finicon-arrow-left"></i>',
        adaptiveHeight: window.innerWidth < 767
    });

    $(window).on('resize', function() {
        if (window.innerWidth < 767) {
            navLinks.on('click', toggleMobileMenu);
        } else {
            navLinks.off('click', toggleMobileMenu);
        }
    })
});