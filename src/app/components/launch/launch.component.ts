import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css'],
})
export class LaunchComponent {
  launchImg01Path: string;
  launchImg02Path: string;
  launchImg03Path: string;
  launchImg04Path: string;

  constructor(private sanitizer: DomSanitizer) {
    this.launchImg01Path = '../assets/img/launch/launch-01.webp';
    this.launchImg02Path = '../assets/img/launch/launch-02.webp';
    this.launchImg03Path = '../assets/img/launch/launch-03.webp';
    this.launchImg04Path = '../assets/img/launch/launch-04.webp';
  }

  getSafelaunchImg01Path(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.launchImg01Path);
  }
  getSafelaunchImg02Path(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.launchImg02Path);
  }
  getSafelaunchImg03Path(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.launchImg03Path);
  }
  getSafelaunchImg04Path(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.launchImg04Path);
  }
}
