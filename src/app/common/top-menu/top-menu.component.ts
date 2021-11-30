import { Component, NgZone, OnInit } from '@angular/core';
import * as jq from 'jquery';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.sass']
})
export class TopMenuComponent implements OnInit {

  zone:NgZone;

  constructor(_zone:NgZone) 
  {
    this.zone = _zone;
  }

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
      link: 'shop',
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
      link: 'about-us',
      linkText: 'About Us',
      title: 'About Us | PremiumCraft Furniture',
      children: []
    },
    {
      link: '',
      linkText: 'Get a Quote',
      title: 'Quote | PremiumCraft Furniture',
      children: []
    },
    {
      link: 'contact-us',
      linkText: 'Find Us',
      title: 'Find | PremiumCraft Furniture',
      children: []
    }
  ];

  submenuSections:number = 4; // bootstrap columns

  mobileMenuOpen:boolean = false;

  toogleMobileMenu() : void
  {
    this.mobileMenuOpen = !this.mobileMenuOpen;

    if(this.mobileMenuOpen)
    {
      this.zone.runOutsideAngular(() => {
        jq('#navbar .dropdown-menu').css({'position': 'relative', 'display': 'contents', 'opacity' : 100, 'visibility': 'visible', 'text-align': 'center'});
        jq('#navbar').slideDown("slow", "linear");
      });
    }
    else
    {
      this.zone.runOutsideAngular(() => {
        jq('#navbar').slideUp();
        jq('#navbar .dropdown-menu').removeAttr('style');
      });
    }
  }

}
