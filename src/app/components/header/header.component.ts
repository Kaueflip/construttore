import { Component, HostListener } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  logoPath: string;
  hamburguerPath: string;
  closePath: string;

  constructor(private sanitizer: DomSanitizer) {
    this.logoPath = './assets/img/logo/logo-n.svg';
    this.hamburguerPath = './assets/img/logo/menu.svg';
    this.closePath = './assets/img/logo/close.svg';
  }

  getSafelogoPath(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.logoPath);
  }
  getSafehamburguerPath(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.hamburguerPath);
  }
  getSafeclosePath(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.closePath);
  }

  scrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled =
      (window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop) >= 100;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
