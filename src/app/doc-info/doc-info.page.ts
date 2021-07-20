import { Component, OnInit } from '@angular/core';
declare var google;

@Component({
  selector: 'app-doc-info',
  templateUrl: './doc-info.page.html',
  styleUrls: ['./doc-info.page.scss'],
})
export class DocInfoPage implements OnInit {
  doctor = {
    name: 'John Doe',
    gender: 'Male',
    race: 'African American',
    birth: 'Los Angeles, CA',
    school: 'Charles Drew University',
    specialties: 'Physician',
    hobbies: 'Basketball, Cooking, Traveling',
    phoneNumber: '(123) 456-7890',
    webPage: 'www.madeupwebsite.com',
    media: "DrJohnDoe"
  };

  business = {
    location: '12736 S Avalon Blvd, Los Angeles CA 90061'
    
  }
  

  constructor() { 
  }

  ngOnInit() {
  }

}
