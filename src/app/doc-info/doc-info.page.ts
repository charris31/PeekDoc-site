import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-doc-info',
  templateUrl: './doc-info.page.html',
  styleUrls: ['./doc-info.page.scss'],
})
export class DocInfoPage implements OnInit {
  doctor = {
    name: 'John Doe',
    pic: 'https://bit.ly/3kLZxm9',
    gender: 'Male',
    age:'38',
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
  
  map: any;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  infoWindows: any = [];
  markers: any = [
    {
      title: "Imaginary Clinic",
      latitude: "33.91696109173674",
      longitude: "-118.26476780243469"
    }
  ]

  constructor() {}

  ionViewDidEnter() {
    this.showMap();
  }

  addMarkersToMap(markers) {
    for (let marker of markers) {
      let position = new google.map.LatLng(marker.latitude, marker.longitude);
      let mapMarker = new google.map.Marker({
        position: position,
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude
      });

      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }

  addInfoWindowToMarker(marker) {
    let infoWindowContent = '<div id="content">' +
                              '<h2 id="firstHeading" class="firstHeading">' + marker.title + '</h2>'
                              '<p>Latitude: ' + marker.latitude + '</p>' +
                              '<p>Longitude: ' + marker.longitude + '</p>' +
                            '</div>';
    let infoWindow = new google.maps.infoWindow({
      content: infoWindowContent
    });

    marker.addListener('click', () =>{
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);
    });
    this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows() {
    for(let window of this.infoWindows) {
      window.close();
    }
  }

  showMap () {
    const location = new google.maps.LatLng(33.91696109173674, -118.26476780243469);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);
  }

  ngOnInit() {
  }

}
