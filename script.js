var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
   spacebeetwen: 3,
    slidesPerGroup: 6,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });