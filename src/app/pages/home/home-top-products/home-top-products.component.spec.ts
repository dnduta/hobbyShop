import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopProductsComponent } from './home-top-products.component';

describe('HomeTopProductsComponent', () => {
  let component: HomeTopProductsComponent;
  let fixture: ComponentFixture<HomeTopProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTopProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTopProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
