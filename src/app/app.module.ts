import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { LaunchComponent } from './components/launch/launch.component';
import { BestComponent } from './components/best/best.component';
import { RegionComponent } from './components/region/region.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { EnterprisesComponent } from './pages/enterprises/enterprises.component';
import { ContactComponent } from './pages/contact/contact.component';
import { OpportunitiesComponent } from './pages/opportunities/opportunities.component';
import { SwiperAboutComponent } from './components/swiper-about/swiper-about.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { EnterpriseDetailsComponent } from './pages/enterprises/enterprise-details/enterprise-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    LaunchComponent,
    BestComponent,
    RegionComponent,
    FooterComponent,
    HomeComponent,
    EnterprisesComponent,
    ContactComponent,
    OpportunitiesComponent,
    SwiperAboutComponent,
    EnterpriseDetailsComponent,
    PageNotFoundComponent,
    BreadcrumbComponent,
    SidebarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgxUsefulSwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
