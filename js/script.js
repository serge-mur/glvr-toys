document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.main-slider', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
})