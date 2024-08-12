import {Navigation, Pagination} from 'swiper/modules';
import {SwiperOptions} from 'swiper/types';

export const swiperOptions: SwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 16,
  updateOnWindowResize: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 32,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
  navigation: {
    nextEl: '[data-reviews-arrow-right]',
    prevEl: '[data-reviews-arrow-left]',
  },
  pagination: {
    type: 'bullets',
    clickable: true,
    el: '[data-reviews-pagination]',
  },
  modules: [Navigation, Pagination],
};
