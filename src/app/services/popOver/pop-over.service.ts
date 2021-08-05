import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopOverService {
  filterArr: string[] = [];


  constructor() { }
  async addtoFilterArr(filters: []){
    console.log(filters);
    this.filterArr = [];
    this.filterArr = this.filterArr.concat(filters);
    console.log (await this.filterArr);
  }
  getFilterArr(){
    return this.filterArr;
  }

  onDismiss(){
    
  }
}
