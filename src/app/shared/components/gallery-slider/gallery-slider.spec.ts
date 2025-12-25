import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySlider } from './gallery-slider';

describe('GallerySlider', () => {
  let component: GallerySlider;
  let fixture: ComponentFixture<GallerySlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GallerySlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GallerySlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
