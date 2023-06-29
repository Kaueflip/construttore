import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Enterprise } from 'src/app/models/enterprise.model';
import { EnterpriseService } from 'src/app/services/enterprise.service';
import { Title } from '@angular/platform-browser';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-enterprise-details',
  templateUrl: './enterprise-details.component.html',
  styleUrls: ['./enterprise-details.component.css'],
})
export class EnterpriseDetailsComponent implements OnInit {
  enterprise: Enterprise | undefined;

  constructor(
    private route: ActivatedRoute,
    private enterpriseService: EnterpriseService,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.getEnterpriseDetails(id);
      }
    });
    this.titleService.setTitle(this.enterprise!.nome + ' | Construttore');
  }

  getEnterpriseDetails(id: string) {
    this.enterpriseService.getEnterpriseById(id).subscribe((enterprise) => {
      this.enterprise = enterprise;
    });
  }

  /*   calcularMediaPorcentagens(): number {
    if (this.enterprise && this.enterprise.aObra) {
      const totalPorcentagens = this.enterprise.aObra.reduce(
        (total, item) => total + item.porcentagem,
        0
      );
      const media = totalPorcentagens / this.enterprise.aObra.length;
      return media;
    }
    return 0;
  } */

  /*   calcularMediaPorcentagens(): number {
    if (this.enterprise && this.enterprise.aObra) {
      const totalPorcentagens = this.enterprise.aObra.reduce(
        (total, item) => total + Number(item.porcentagem),
        0
      );
      const media = totalPorcentagens / this.enterprise.aObra.length;
      return media;
    }
    return 0;
  } */

  calcularMediaPorcentagens(): number {
    if (this.enterprise && this.enterprise.aObra) {
      const totalPorcentagens = this.enterprise.aObra.reduce(
        (total, item) => total + Number(item.porcentagem),
        0
      );
      const media = totalPorcentagens / this.enterprise.aObra.length;
      const mediaInteira = Math.floor(media); // ou Math.round(media) para arredondar
      return mediaInteira;
    }
    return 0;
  }

  config: SwiperOptions = {
    //pagination: { el: '.swiper-pagination', clickable: true },
    /*     allowTouchMove: true,
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
        slidesPerView: 3,
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
    }, */
    /*    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, */
    /*    loop: true, */
    /*     effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }, */
    direction: 'vertical',
    grabCursor: true,
    allowTouchMove: true,
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      /* dynamicBullets: true, */
    },
  };
}
