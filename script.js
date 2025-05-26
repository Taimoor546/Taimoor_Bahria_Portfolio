$(document).ready(function () {
    // Toggle mobile menu/navbar
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Sticky navbar and scroll-up button
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }

        if ($(this).scrollTop() > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });

    // Scroll-up button
    $('.scroll-up-btn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        $('html').css("scrollBehavior", "auto");
    });

    // Smooth scroll for navbar menu links
    $('.navbar .menu li a').click(function (e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const target = $(this).attr("href"); // Get the target section id
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
        // Close the menu on mobile view
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active");
    });

    // Typed.js animation
    const typedOptions = {
        strings: ["Computer Science Student", "Frontend Developer", "Problem Solver", "Tech Enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    };
    new Typed(".typing", typedOptions);
    new Typed(".typing-2", typedOptions);

    // Owl Carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1, nav: false },
            600: { items: 2, nav: false },
            1000: { items: 3, nav: false }
        }
    });
});
