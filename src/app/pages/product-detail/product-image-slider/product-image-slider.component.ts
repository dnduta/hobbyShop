import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-image-slider',
  templateUrl: './product-image-slider.component.html',
  styleUrls: ['./product-image-slider.component.sass']
})
export class ProductImageSliderComponent implements OnInit {

  @Input("productImages") productImages:any;

  constructor() { }

  ngOnInit(): void {
  }
  
  slideConfig = {
    autoplay: false,
    infinite: true,
    arrows: true,
    prevArrow: '<button type=\'button\' class=\'heroSliderArrow prevArrow tf-ion-chevron-left\'></button>',
    nextArrow: '<button type=\'button\' class=\'heroSliderArrow nextArrow tf-ion-chevron-right\'></button>',
    dots: false,
    autoplaySpeed: 7000,
    pauseOnFocus: false,
    pauseOnHover: false
  }

  slideConfig2 = {
    slidesToShow:4,
    autoplay: false,
    infinite: false,
    dots: true
  }

}
