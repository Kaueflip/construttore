import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperAboutComponent } from './swiper-about.component';

describe('SwiperAboutComponent', () => {
  let component: SwiperAboutComponent;
  let fixture: ComponentFixture<SwiperAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiperAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
