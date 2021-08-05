import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { NavController, PopoverController, ModalController } from '@ionic/angular';
import { PopoverComponent } from '../components/popover/popover.component';
import { PopOverService } from '../services/popOver/pop-over.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  // This is for the specialties 
  isPhysician: boolean = false;
  isDentist: boolean = false;
  isSurgeon: boolean = false;
  isPsychiatrist: boolean = false;

  // This is for the query parameter
  private query: ActivatedRoute;

  // This is for the filtered list
  newFilter = []

  searchTerm: string;
  selected_option: string;
  doctors = [
    {name: 'John Doe', specialty: 'Physician', pic: 'https://bit.ly/3kLZxm9', race: 'Black/African American', gender: 'Male', language: 'English', insurance: 'Any'},
    {name: 'Jane Doe', specialty: 'Dentist', pic: 'https://bit.ly/3kVdrCx', race: 'Asian', gender: 'Female', language: 'English, Korean', insurance: 'Any'},
    {name: 'Andrew Rue', specialty: 'Surgeon', pic: 'https://bit.ly/3x7FHEA', race: 'Middle Eastern', gender: 'Male', language: 'English', insurance: 'Any'},
    {name: 'Sofia Garcia', specialty: 'Psychiatrist', pic: 'https://bit.ly/3ePLTue', race: 'Latin', gender: 'Female', language: 'English, Spanish', insurance: 'Any'}
  ];


  originalData: any;
  modifiedData: any;
  filter: any;
  filterArr = [];

  constructor(public navCtrl: NavController, private popCtrl: PopoverController, private service: PopOverService, private activatedRoute: ActivatedRoute) {

  
  }





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
  async getFilter(){
    this.filterArr = await this.service.getFilterArr();
    console.log(this.filterArr);

    let res = this.doctors.filter( (doctor)=> {
      return (this.filterArr.indexOf(doctor.specialty) >=0) && (this.filterArr.indexOf(doctor.race) >=0);  
    })
    this.doctors = res;
  }

  //This is for the buttons
  physicianToggle(){
    if(this.isPhysician){
      this.isPhysician = true;
      console.log(this.isPhysician)
    }
    else{
      this.isPhysician = false;
      console.log(this.isPhysician)
    }

  }
  dentistToggle(){
    this.isDentist = true;
  }
  surgeonToggle(){
    this.isSurgeon = true;
  }
  psychiatristToggle(){
    this.isPsychiatrist = true;
  }
  
}