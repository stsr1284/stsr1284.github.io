document.addEventListener("DOMContentLoaded", function () {
    window.swiper = new Swiper(".menuSwiper", {
        slidesPerView: 1.3,
        spaceBetween: 10,
        breakpoints: {
            450: {
                slidesPerView: 1.5,
            },
            768: {
                slidesPerView: 2.7,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
        loop: true,
        centeredSlides: true,
        navigation: {
            nextEl: "#next",
            prevEl: "#prev",
        },
        observer: true,
        observerParents: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        speed: 500,
    });
    
    window.franchiseSwiper = new Swiper(".franchiseSwiper", {
        slidesPerView: 1.2,
        spaceBetween: 10,
        breakpoints: {
            768: {
                slidesPerView: 1.7,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
        loop: true,
        centeredSlides: true,
        navigation: {
            nextEl: "#franchiseNext",
            prevEl: "#franchisePrev",
        },
        observer: true,
        observerParents: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        speed: 500,
    });
});
