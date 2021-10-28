import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCategoryDisplayComponent } from './home-category-display.component';

describe('HomeCategoryDisplayComponent', () => {
  let component: HomeCategoryDisplayComponent;
  let fixture: ComponentFixture<HomeCategoryDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCategoryDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCategoryDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
