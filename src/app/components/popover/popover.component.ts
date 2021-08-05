import { Component, OnInit } from '@angular/core';
import { PopOverService } from 'src/app/services/popOver/pop-over.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  selected_doctor = null;




  constructor(private service: PopOverService) { }

  checker(event){
    console.log(event.detail.value)
    
    this.service.addtoFilterArr(event.detail.value)
  }




  ngOnInit() {}

}
