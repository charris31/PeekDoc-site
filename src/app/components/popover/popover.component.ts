import { Component, OnInit } from '@angular/core';
import { PopOverService } from 'src/app/services/popOver/pop-over.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  selected_doctor = null;
  
  doctors = [
    {
      field: 'Dentist',
      race: 'Hispanic/Latinx',
      gender: 'Male',
      language: 'English',
      insurance:'Kaiser Permenete',
      needs: 'Diabeties',
    },
    {
      field: 'Physician',
      race: 'Black/African American',
      gender: 'Female',
      language: 'Spanish',
      insurance:'Health Net',
      needs: '',
    },
  ]



  constructor(private service: PopOverService) { }

  checker(event){
    console.log(event.detail.value)
    
    this.service.addtoFilterArr(event.detail.value)
  }

  


  ngOnInit() {}

}
