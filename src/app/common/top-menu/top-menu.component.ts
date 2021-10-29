import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.sass']
})
export class TopMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuLinks = [
    {
      link: '',
      linkText: 'Home',
      title: 'PremiumCraft Furniture',
      children: []
    },
    {
      link: '',
      linkText: 'Shop',
      title: 'Shop - PremiumCraft Furniture',
      children: [
        {
          dropdownHeader: 'Office Desks',
          links: [
            { link: '', linkText: 'Desk1- awesome', title: 'Awesome - PremiumCraft Furniture' },
            { link: '', linkText: 'Desk2- awesome', title: 'Awesome - PremiumCraft Furniture' },
            { link: '', linkText: 'Desk3- awesome', title: 'Awesome - PremiumCraft Furniture' },
            { link: '', linkText: 'Desk4- awesome', title: 'Awesome - PremiumCraft Furniture' },
          ]
        },
        {
          dropdownHeader: 'Cofee Tables',
          links: [
            { link: '', linkText: 'Tables1- awesome', title: 'Awesome - PremiumCraft Furniture' },
            { link: '', linkText: 'Tables2- awesome', title: 'Awesome - PremiumCraft Furniture' },
            { link: '', linkText: 'Tables3- awesome', title: 'Awesome - PremiumCraft Furniture' },
            { link: '', linkText: 'Tables4- awesome', title: 'Awesome - PremiumCraft Furniture' },
          ]
        },
        {
          dropdownHeader: 'Side Tables',
          links: [
            { link: '', linkText: 'Side1- awesome', title: 'Awesome - PremiumCraft Furniture' },
            { link: '', linkText: 'Side2- awesome', title: 'Awesome - PremiumCraft Furniture' },
            { link: '', linkText: 'Side3- awesome', title: 'Awesome - PremiumCraft Furniture' },
            { link: '', linkText: 'Side4- awesome', title: 'Awesome - PremiumCraft Furniture' },
          ]
        }
      ]
    },
    {
      link: '',
      linkText: 'About Us',
      title: 'About Us - PremiumCraft Furniture',
      children: []
    },
    {
      link: '',
      linkText: 'Contact Us',
      title: 'Contact Us - PremiumCraft Furniture',
      children: []
    }
  ];

  submenuSections:number = 4; // bootstrap columns

}
