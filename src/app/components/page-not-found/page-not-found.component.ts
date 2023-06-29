import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent {
  image404Path: string;

  constructor(private sanitizer: DomSanitizer) {
    this.image404Path = '../assets/img/home/banner.webp';
  }

  getimage404Path(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.image404Path);
  }
}
