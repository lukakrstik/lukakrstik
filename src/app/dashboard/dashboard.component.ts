import { Component, OnInit } from '@angular/core';
import { Image } from '../../image';
import { IMAGES } from "../images";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  featured: Image[] = [];
  constructor() {}

  ngOnInit(): void {
    for(let i=0; i<IMAGES.length; i++){
      if(IMAGES[i].feature) this.featured.push(IMAGES[i]);
    }
  }

  linkce:string = "";
  displayFull(newLink:string) {
    this.linkce = newLink;
    document.getElementById('cover')!.style.display = 'flex';
  }
  closeDisplay(event:any) {
    console.log(event);
    if(event.path[0].tagName != 'IMG')
      document.getElementById('cover')!.style.display = 'none';
  }
}
