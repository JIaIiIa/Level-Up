const burgerBtn = document.querySelector('.burger-btn');
const menuLink = document.querySelectorAll('.menu__link');
const stopScroll = document.querySelector('body');

if (document.querySelector('.transparent')) {
  burgerBtn.addEventListener('click', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('active');
    header.classList.remove('color');
    stopScroll.classList.toggle('active');
    if (!header.classList.contains('active') && window.scrollY > 50) {
      header.classList.add('color');
    }
  });

  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
      header.classList.add('color');
    } else {
      header.classList.remove('color');
    }
  });
} else {
  // Добавляем класс color при загрузке страницы
  window.addEventListener('load', () => {
    const header = document.querySelector('.header');
    header.classList.add('color');
  });

  burgerBtn.addEventListener('click', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('active');
    header.classList.remove('color');
    stopScroll.classList.toggle('active');
    if (!header.classList.contains('active')) {
      header.classList.add('color');
    }
  });
}



menuLink.forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.header').classList.remove('active');
    stopScroll.classList.remove('active');
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetID = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetID);

    if (targetElement) {
      let offset = window.innerWidth <= 1020 ? 0 : 0;

      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

const swiperPartners = new Swiper('.partners__inner', {
  slidesPerView: 8,
  spaceBetween: 20,
  breakpoints: {
    1300: {
      slidesPerView: 8,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    750: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 4,
      spaceBetween: 20,
    },

    200: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    }
  }
});

if (document.querySelector('.wrapper')) {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother);

  let smoother = ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.0,
    effects: true,
  });


  gsap.fromTo('.about__title', { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: '.hero',
        start: 'bottom 60%',
        end: 'bottom center',
      }
    }
  )
  gsap.fromTo('.about__text-wrapp', { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: '.hero',
        start: 'bottom 60%',
        end: 'bottom center',
      }
    }
  )
  gsap.fromTo('.about__img-right', { opacity: 0, x: 100 },
    {
      opacity: 1,
      x: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: '.hero',
        start: 'bottom 60%',
        end: 'bottom center',
      }
    }
  )


  gsap.set('.img-2', { y: '150%', x: 200, scale: 0.8 });
  gsap.set('.img-3', { y: '350%', x: 300, scale: 0.8 });
  gsap.set('.img-4', { y: '450%', x: 400, scale: 0.8 });
  gsap.set('.img-5', { y: '550%', x: 500, scale: 0.8 });
  gsap.set('.img-6', { y: '650%', x: 600, scale: 0.8 });

  gsap.set('.swiper-background-1', { opacity: 1 })
  gsap.set('.swiper-background-2', { opacity: 0 })
  gsap.set('.swiper-background-3', { opacity: 0 })
  gsap.set('.swiper-background-4', { opacity: 0 })
  gsap.set('.swiper-background-5', { opacity: 0 })
  gsap.set('.swiper-background-6', { opacity: 0 })

  gsap.set('.title-2', { y: '150%' })
  gsap.set('.title-3', { y: '250%' })
  gsap.set('.title-4', { y: '350%' })
  gsap.set('.title-5', { y: '450%' })
  gsap.set('.title-6', { y: '550%' })

  gsap.set('.text-2', { y: '150%' })
  gsap.set('.text-3', { y: '250%' })
  gsap.set('.text-4', { y: '350%' })
  gsap.set('.text-5', { y: '450%' })
  gsap.set('.text-6', { y: '550%' })

  if (window.innerWidth >= 700) {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#destinations',
        start: 'top top',
        end: '+=3200',
        scrub: 2,
        pin: true,
      }
    });

    tl.to('.img-1', { y: '-150%', duration: 1.0 })
      .to('.swiper-background-1', { opacity: 0 }, 0)
      .to('.title-1, .text-1', { y: '-100%' }, 0)
      .to('.title-2, .text-2', { y: 0, duration: 1.5 }, 0)
      .to('.img-2', { y: 0, scale: 1, x: 0, duration: 1.5 }, 0)
      .to('.swiper-background-2', { opacity: 1 }, 0)
      .to('.img-2', { y: '-150%', duration: 1.0 })
      .to('.title-2, .text-2', { y: '-150%', delay: 0.7, }, 1)
      .to('.title-3, .text-3', { y: 0, delay: 0.7, }, 1)
      .to('.img-3', { y: 0, scale: 1, x: 0, duration: 1.5 }, 1)
      .to('.swiper-background-2', { opacity: 0, delay: 0.7 }, 1)
      .to('.swiper-background-3', { opacity: 1, delay: 0.7 }, 1)
      .to('.img-3', { y: '-150%', duration: 1.0 })
      .to('.title-3, .text-3', { y: '-150%', delay: 0.7, }, 2)
      .to('.title-4, .text-4', { y: 0, delay: 0.7, }, 2)
      .to('.img-4', { y: 0, scale: 1, x: 0, duration: 1.5 }, 2)
      .to('.swiper-background-3', { opacity: 0, delay: 0.7 }, 2)
      .to('.swiper-background-4', { opacity: 1, delay: 0.7 }, 2)
      .to('.img-4', { y: '-150%', duration: 1.0 })
      .to('.title-4, .text-4', { y: '-150%', delay: 0.7, }, 3)
      .to('.title-5, .text-5', { y: 0, delay: 0.7, }, 3)
      .to('.img-5', { y: 0, scale: 1, x: 0, duration: 1.5 }, 3)
      .to('.swiper-background-4', { opacity: 0, delay: 0.7 }, 3)
      .to('.swiper-background-5', { opacity: 1, delay: 0.7 }, 3)
      .to('.img-5', { y: '-150%', duration: 1.0 })
      .to('.title-5, .text-5', { y: '-150%', delay: 0.7, }, 4)
      .to('.title-6, .text-6', { y: 0, delay: 0.7, }, 4)
      .to('.img-6', { y: 0, scale: 1, x: 0, duration: 1.5 }, 4)
      .to('.swiper-background-5', { opacity: 0, delay: 0.7 }, 4)
      .to('.swiper-background-6', { opacity: 1, delay: 0.7 }, 4)
  }


  gsap.fromTo('.experience__inner', { opacity: 0, y: 100 }, {
    opacity: 1, y: 0, duration: 1.2,
    scrollTrigger: {
      trigger: '.experience',
      start: '150px bottom',
    }
  });


  const tl2 = gsap.timeline({ paused: true });

  tl2.fromTo('.swiper-item__title-white', { x: '100%' }, { x: '-50%', duration: 1.2 })
    .fromTo('.swiper-item__title-black', { x: '-200%' }, { x: '-50%', duration: 1.2 }, 0);


  const swiperMine = new Swiper('.services-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 1000,
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },
    pagination: {
      el: '.swiper-pagination-bottom',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' +
          '/' +
          '<span class="' + totalClass + '"></span>';
      },
      formatFractionCurrent: function (number) {
        return ('0' + number).slice(-2);
      },
      formatFractionTotal: function (number) {
        return ('0' + number).slice(-2);
      }
    }
  });


  swiperMine.on('slideChange', () => {
    tl2.restart();
  });


  document.querySelector('.swiper-btn-next').addEventListener('click', () => {
    tl2.play();
  });

  document.querySelector('.swiper-btn-prev').addEventListener('click', () => {
    tl2.play();
  });


  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: '.services__inner',
      start: '35% bottom',
    }
  });

  tl3.fromTo('.swiper-item__title-white', { x: '100%' }, { x: '-50%', duration: 1.2 })
    .fromTo('.swiper-item__title-black', { x: '-200%' }, { x: '-50%', duration: 1.2 }, 0)
    .fromTo('.services-button', { y: 100 }, { y: 0, duration: 1.2 }, 0)

  gsap.fromTo('.blog__inner', { y: 100 }, {
    y: 0, duration: 1.2,
    scrollTrigger: {
      trigger: '.blog__inner',
      start: '150px bottom',
    }
  })

  gsap.fromTo('.partners__inner', { x: 100 }, {
    x: 0, duration: 1.2,
    scrollTrigger: {
      trigger: '.partners__inner',
      start: '150px bottom',
    }
  })

}

if (document.querySelector('.different__list')) {
  const boxes = document.querySelectorAll('.different__item');

  function adjustWidths() {
    let currentWidth = 1071;
    let decrement = 42;

    if (window.innerWidth <= 1100) {
      currentWidth = 754;
    }

    if (window.innerWidth <= 767) {
      currentWidth = 366;
      decrement = 10;
    }

    if (window.innerWidth <= 374) {
      currentWidth = 300;
      decrement = 10;
    }

    boxes.forEach((box, index) => {
      box.style.maxWidth = `${currentWidth}px`;
      currentWidth -= decrement;
    });
  }

  adjustWidths();

  window.addEventListener('resize', adjustWidths);
}


if (document.querySelector('.team')) {
  let swiperTeam;

  function swiperWidth() {
    if (window.innerWidth <= 768) {
      if (!swiperTeam) {
        swiperTeam = new Swiper('.team__list-wrapper', {
          slidesPerView: 2.5,
          spaceBetween: 20,
          breakpoints: {
            500: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            0: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            }
          }
        });
      }
    } else {
      if (swiperTeam) {
        swiperTeam.destroy(true, true);
        swiperTeam = null;
      }
    }
  }

  swiperWidth();

  window.addEventListener('resize', swiperWidth);
}


if (document.querySelector('.destinations-hero')) {
  const swiperDestinations = new Swiper('.destinations-hero__img-wrapper', {
    slidesPerView: 1.6,
    centeredSlides: true,
    spaceBetween: 20,
    initialSlide: 1,
    speed: 1000,
    breakpoints: {
      500: {
        slidesPerView: 1.6,
        spaceBetween: 20,
      },
      0: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      }
    }
  })
}

if (document.querySelector('.other-dest')) {
  const swiperOtherDest = new Swiper('.other-dest__list', {
    slidesPerView: 3.1,
    spaceBetween: 20,
    breakpoints: {
      769: {
        slidesPerView: 3.1,
        spaceBetween: 20,
      },
      500: {
        slidesPerView: 2.6,
        spaceBetween: 20,
      },
      0: {
        slidesPerView: 1.4,
        spaceBetween: 20,
      }
    }
  })
}



















































