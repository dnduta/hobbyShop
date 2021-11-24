import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.sass']
})
export class EnquiryFormComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }
  
  // TODO: trigger modal open with RXJS
  openEnquiryModal(): void
  {
    let modal = document.getElementById("product-modal") as HTMLElement;
    modal.style.display = 'block';
    modal.style.opacity = '100';

    if( window.innerWidth < 768)
    {
      let modalContent = document.getElementById("product-modal-dialog") as HTMLElement;
      modalContent.style.position = 'absolute';
      modalContent.style.left = '0';
      modalContent.style.marginTop = '4em';
      
      console.log("Mobile content")
    }
  }
  
  closeEnquiryModal(): void
  {
    let modal = document.getElementById("product-modal") as HTMLElement;
    modal.removeAttribute("style");
    let modalContent = document.getElementById("product-modal-dialog") as HTMLElement;
    modalContent.removeAttribute("style");
  }

}
