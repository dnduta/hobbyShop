import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-top-products',
  templateUrl: './home-top-products.component.html',
  styleUrls: ['./home-top-products.component.sass']
})
export class HomeTopProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items = [
    {
      Photo_url: "../../../assets/images/shop/products/product-1.jpg",
      Name: "Office table",
      Price: "10,000"
    },    
    {
      Photo_url: "../../../assets/images/shop/products/product-2.jpg",
      Name: "Mani Bed",
      Price: "10,000"
    },
    {
      Photo_url: "../../../assets/images/shop/products/product-3.jpg",
      Name: "Office table",
      Price: "10,000"
    }
  ];

}
