import { Component, OnInit } from '@angular/core';
import {NavController, PopoverController, ModalController} from '@ionic/angular';
import { PopoverComponent } from '../components/popover/popover.component';
import { PopOverService } from '../services/popOver/pop-over.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  searchTerm: string;
  selected_option: string;
  doctors = [
    {name: 'John Doe', specialty: 'Physician', pic: 'https://bit.ly/3kLZxm9', race: 'Black/African American', gender: 'Male', language: 'English', insurance: 'Any'},
    {name: 'Jane Doe', specialty: 'Dentist', pic: 'https://bit.ly/3kVdrCx', race: 'Korean', gender: 'Female', language: 'English, Korean', insurance: 'Any'},
    {name: 'Andrew Rue', specialty: 'Surgeon/Scientist', pic: 'https://bit.ly/3x7FHEA', race: 'Middle Eastern', gender: 'Male', language: 'English', insurance: 'Any'},
    {name: 'Sofia Garcia', specialty: 'Psychiatrist', pic: 'https://bit.ly/3ePLTue', race: 'Latina', gender: 'Female', language: 'English, Spanish', insurance: 'Any'}
  ];


  originalData: any;
  modifiedData: any;
  filter: any;
  filterArr: string[];

  constructor(public navCtrl: NavController, private popCtrl: PopoverController, private service: PopOverService) {}





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
    console.log(popover);
    const { role } = await popover.onDidDismiss();
    this.service.filterArr;
    await this.getFilter();
    console.log('onDidDismiss resolved with role', role);
  }
  getFilter(){
    this.filterArr = this.service.getFilterArr();
    console.log(this.filterArr);

    let res = this.doctors.filter(async function (doctor) {
      console.log(this.filterArr);
      
    })
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
