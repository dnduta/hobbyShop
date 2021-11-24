import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-product',
  templateUrl: './grid-product.component.html',
  styleUrls: ['./grid-product.component.sass']
})
export class GridProductComponent implements OnInit {

  @Input("item") item:any;

  constructor() { }

  ngOnInit(): void {
  }

  enquireAboutItem():void
  {
    // TODO: trigger modal open with RXJS
  }

}
