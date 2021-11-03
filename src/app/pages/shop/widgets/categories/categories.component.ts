import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categories = [
    {
      name: "Office",
      children: ["Office desks", "Drawers"]
    },
    {
      name: "Smart Spaces",
      children: ["Shoe racks", "Shelves", "Stands"]
    },
    {
      name: "Home",
      children: ["Coffee table", "Side tables", "Lamp stands"]
    }
  ];

}
