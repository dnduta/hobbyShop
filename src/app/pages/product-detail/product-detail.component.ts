import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  item = {
    Name: "Office desk",
    Description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsum dicta quod, quia doloremque aut deserunt commodi quis. Totam a consequatur beatae nostrum, earum consequuntur? Eveniet consequatur ipsum dicta recusandae.</p>" +
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, velit, sunt temporibus, nulla accusamus similique sapiente tempora, at atque cumque assumenda minus asperiores est esse sequi dolore magnam. Debitis, explicabo.",
    product_images: [
      '../../../assets/images/shop/single-products/product-1.jpg',
      '../../../assets/images/shop/single-products/product-2.jpg',
      '../../../assets/images/shop/single-products/product-3.jpg',
      '../../../assets/images/shop/single-products/product-4.jpg',
      '../../../assets/images/shop/single-products/product-5.jpg',
      '../../../assets/images/shop/single-products/product-6.jpg'
    ]
  }

}
