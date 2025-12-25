import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareCard } from './compare-card';

describe('CompareCard', () => {
  let component: CompareCard;
  let fixture: ComponentFixture<CompareCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompareCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompareCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
