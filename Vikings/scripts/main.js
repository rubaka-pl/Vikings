barba.init({
  views: [
    {
      namespace: "home",
      afterEnter() {
        // Вызываем функцию homePage() после загрузки страницы
        homePage();
      },
    },
  ],
  transitions: [
    {
      name: "opacity-transition",
      sync: true,
      leave(data) {
        return gsap
          .timeline()
          .to(data.current.container, {
            opacity: 0,
          })
          .fromTo(
            ".box",
            {
              x: "100%",
            },
            {
              x: "-100%",
            },
            0
          );
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0,
        });
      },
    },
  ],
});

function homePage() {
  // Ваш код инициализации слайдера и прочих функций
  $(".menu__btn").on("click", function () {
    $(".menu_list").toggleClass("menu__list--active");
  });

  $(".heroes__slider-img").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".heroes__slider-text",
    prevArrow:
      '<button class="slick-btn slick-prev"><img src="./img/arrow_left.png" alt="prev"></button>',
    nextArrow:
      '<button class="slick-btn slick-next"><img src="./img/arrow_right.png" alt="next"></button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  });

  $(".heroes__slider-text").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: ".heroes__slider-img",
    arrows: false,
  });

  // fancybox
  // Уберем проверку, так как Fancybox всегда загружен через Barba.js
  Fancybox.bind("[data-fancybox]", {
    Html: {
      youtube: {
        rel: 1,
        showinfo: 1,
        fs: 1,
      },
    },
  });
}
