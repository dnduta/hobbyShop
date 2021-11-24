import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.sass']
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items = [
    {
      Photo_url: "../../../assets/images/shop/products/product-1.jpg",
      Name: "Office table",
      Price: "10,000"
    }
  ];

}
