import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  logoPath: string;

  constructor(private sanitizer: DomSanitizer) {
    this.logoPath = '../assets/img/logo/logo-n.svg';
  }
  getSafelogoPath(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.logoPath);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
