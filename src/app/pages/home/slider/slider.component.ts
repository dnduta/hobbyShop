import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slideConfig = {
    autoplay: true,
    infinite: true,
    arrows: true,
    prevArrow: '<button type=\'button\' class=\'heroSliderArrow prevArrow tf-ion-chevron-left\'></button>',
    nextArrow: '<button type=\'button\' class=\'heroSliderArrow nextArrow tf-ion-chevron-right\'></button>',
    dots: true,
    autoplaySpeed: 7000,
    pauseOnFocus: false,
    pauseOnHover: false
  }

  slickInit(e:any) {
    console.log('slick initialized');
    console.log(e);
  }
     
  breakpoint(e:any) {
    console.log('breakpoint');
    console.log(e);
  }
     
  afterChange(e:any) {
    console.log('afterChange');
    console.log(e);
  }
     
  beforeChange(e:any) {
    console.log('beforeChange');
    console.log(e);
  }
}
