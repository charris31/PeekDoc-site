import { Component, OnInit } from '@angular/core';
import {NavController, PopoverController} from '@ionic/angular';
import { PopoverComponent } from '../components/popover/popover.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  searchTerm: string;
  doctors = [
    {name: 'John Doe', specialty: 'Physician', pic: 'https://bit.ly/3kLZxm9', about: 'I am a good doctor'},
    {name: 'Jane Doe', specialty: 'Dentist', pic: 'https://bit.ly/3kVdrCx', about: 'I am also a good doctor'},
    {name: 'Andrew Rue', specialty: 'Surgeon/Scientist', pic: 'https://bit.ly/3x7FHEA', about: 'I am the right doctor for you'},
    {name: 'Sofia Garcia', specialty: 'Psychiatrist', pic: 'https://bit.ly/3ePLTue', about: 'I can be a great doctor for you too'}
  ];

  originalData: any;
  modifiedData: any;
  filter: any;

  constructor(public navCtrl: NavController, private popCtrl: PopoverController) {}

  ngOnInit() {
  }

  async presentPopover(ev: any) {
    const popover = await this.popCtrl.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}


  // I made this way too complicated

  //   this.originalData = [
  //     {name: 'John Doe', specialty: 'Physician', pic: 'https://bit.ly/36qMUof', about: 'I am a good doctor'},
  //     {name: 'Jane Doe', specialty: 'Dentist', pic: 'https://bit.ly/3zokxmU', about: 'I am also a good doctor'},
  //     {name: 'Silas Stone', specialty: 'Surgeon/Scientist', pic: 'https://bit.ly/3iulbsi', about: 'I work at S.T.A.R. Labs'},
  //     {name: 'Harleen Quinzel', specialty: 'Psychiatrist', pic: 'https://bit.ly/3eIhk9S', about: 'There is always a wild side to an innocent face'}
  //   ];

  //   this.modifiedData = JSON.parse(JSON.stringify(this.originalData));
  // }

  // resetData(){
  //   this.modifiedData = JSON.parse(JSON.stringify(this.originalData));
  // }

  // filterData(){

  //   this.modifiedData = this.modifiedData.filter((doctor) => {
  //     return doctor.specialty = 'Physician';
  //   });

  // }

  // mapData(){
