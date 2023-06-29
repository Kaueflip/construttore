import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-swiper-about',
  templateUrl: './swiper-about.component.html',
  styleUrls: ['./swiper-about.component.css'],
})
export class SwiperAboutComponent {
  title = 'ng-swiper-demo';

  slideData = [
    {
      id: 1,
      path: 'privilege',
      class: 'slide-01',
      alt: 'Privilège Brava',
    },
    {
      id: 2,
      path: 'brava-view',
      class: 'slide-02',
      alt: 'Brava View',
    },
    {
      id: 3,
      path: 'solares',
      class: 'slide-03',
      alt: 'Solares da Brava',
    },
    {
      id: 4,
      path: 'brava-view',
      class: 'slide-04',
      alt: 'Brava View',
    },
  ];

  config: SwiperOptions = {
    //pagination: { el: '.swiper-pagination', clickable: true },
    allowTouchMove: true,
    slidesPerView: 'auto',
    grabCursor: true,
    spaceBetween: 16,
    watchOverflow: true,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      500: {
        slidesPerView: 3,
      },
      400: {
        slidesPerView: 2,
      },
      300: {
        slidesPerView: 1,
      },
    },
    /*    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, */
    loop: true,
  };
}
