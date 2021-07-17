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
      {name: 'John Doe', specialty: 'Physician', avatar: 'https://bit.ly/36Cy6CO', about: 'I am a good doctor'},
      {name: 'Jane Doe', specialty: 'Surgeon', avatar: 'https://bit.ly/36GxFaG', about: 'I am also a good doctor'}
    ];
    this.modifiedData = JSON.parse(JSON.stringify(this.originalData));
  }

  resetData(){
    this.modifiedData = JSON.parse(JSON.stringify(this.originalData));
  }

  filterData(){

  }

  mapData(){

  }

  ngOnInit() {
  }

}
