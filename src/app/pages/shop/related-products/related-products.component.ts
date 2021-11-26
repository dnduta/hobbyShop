import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.sass']
})
export class RelatedProductsComponent implements OnInit {

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
