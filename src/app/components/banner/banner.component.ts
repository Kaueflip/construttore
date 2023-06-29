import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent {
  bannerImg: string;

  constructor(private sanitizer: DomSanitizer) {
    this.bannerImg = '../assets/img/banner.webp';
  }

  getSafebannerImg(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.bannerImg);
  }
}
