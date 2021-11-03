import { Component, NgZone, OnInit } from '@angular/core';
import * as jq from 'jquery';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit {

  zone: NgZone;

  constructor(_zone: NgZone) {
    this.zone = _zone;
  }

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


  togglePanel(index: number): void {
    let panelLink = document.getElementById('accordion-link-' + index) as HTMLElement;
    let panel = document.getElementById('collapse' + index) as HTMLElement;

    let isCollaped = panelLink.classList.contains('collapsed');
    let panelOpen = panel.classList.contains('in');

    if (isCollaped && !panelOpen) {
      panelLink.classList.remove('collapsed');
      panel.classList.add('in');
    }
    else {
      panelLink.classList.add('collapsed');
      panel.classList.remove('in');
    }
  }
}
