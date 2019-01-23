$(document).ready(function () {
    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(document).on('click', '.mobile-menu', function(e) {
        $('.header').toggleClass('js-menu-visible');
    });

    $(document).on('click', '.mobile-menu__close', function(e) {
        $('.header').toggleClass('js-menu-visible');
    });

    if($('.top-section__text').length) {
        $('.top-section__text').addClass('is-visible');
    }

    if($('.proposal-section').length) {
        $(window).on('resize scroll', function() {
            var block = $('.proposal-section');

            if ($(block).isInViewport()) {
                $(block).addClass('is-visible');
            }
        });
    }

    if($('.services-section__item').length) {
        $(window).on('resize scroll', function() {
            var block = $('.services-section__item');

            if ($(block).isInViewport()) {
                $(block).addClass('is-visible');
            }
        });
    }

    if($('.news-section').length) {
        $(window).on('resize scroll', function() {
            var block = $('.news-section');

            if ($(block).isInViewport()) {
                $(block).addClass('is-visible');
            }
        });
    }
});
