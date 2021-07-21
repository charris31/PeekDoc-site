import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  originalData: any;
  modifiedData: any;

  constructor(public navCtrl: NavController) { 

    this.originalData = [
      {name: 'John Doe', specialty: 'Physician', pic: 'https://bit.ly/36qMUof', about: 'I am a good doctor'},
      {name: 'Jane Doe', specialty: 'Dentist', pic: 'https://bit.ly/3zokxmU', about: 'I am also a good doctor'},
      {name: 'Silas Stone', specialty: 'Surgeon/Scientist', pic: 'https://bit.ly/3iulbsi', about: 'I work at S.T.A.R. Labs'},
      {name: 'Harleen Quinzel', specialty: 'Psychiatrist', pic: 'https://bit.ly/3eIhk9S', about: 'There is always a wild side to an innocent face'}
    ];

    this.modifiedData = JSON.parse(JSON.stringify(this.originalData));
  }

  resetData(){
    this.modifiedData = JSON.parse(JSON.stringify(this.originalData));
  }

  filterData(){

    this.modifiedData = this.modifiedData.filter((doctor) => {
      return doctor.specialty = 'Physician';
    });

  }

  mapData(){

  }

  ngOnInit() {
  }

}
