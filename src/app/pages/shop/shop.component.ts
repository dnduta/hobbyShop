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
    },    
    {
      Photo_url: "../../../assets/images/shop/products/product-4.jpg",
      Name: "Mani Bed",
      Price: "10,000"
    },
    {
      Photo_url: "../../../assets/images/shop/products/product-5.jpg",
      Name: "Office table",
      Price: "10,000"
    },    
    {
      Photo_url: "../../../assets/images/shop/products/product-6.jpg",
      Name: "Mani Bed",
      Price: "10,000"
    },
    {
      Photo_url: "../../../assets/images/shop/products/product-7.jpg",
      Name: "Office table",
      Price: "10,000"
    },    
    {
      Photo_url: "../../../assets/images/shop/products/product-8.jpg",
      Name: "Mani Bed",
      Price: "10,000"
    },
    {
      Photo_url: "../../../assets/images/shop/products/product-9.jpg",
      Name: "Office table",
      Price: "10,000"
    }
  ];

}
