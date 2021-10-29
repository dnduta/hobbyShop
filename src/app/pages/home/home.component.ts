import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  title:Title;

  constructor(_title:Title) {
    this.title = _title;
  }
  
  ngOnInit(): void {
    this.title.setTitle('PremiumCraft Furniture.');
  }

}
