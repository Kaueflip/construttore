import { AfterViewInit, Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  logoPath: string;

  constructor(private sanitizer: DomSanitizer) {
    this.logoPath = '../assets/img/logo/logo.svg';
  }
  getSafelogoPath(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.logoPath);
  }
}
