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
  constructor() { }

  ngOnInit(): void {
    for(let i=0; i<IMAGES.length; i++){
      if(IMAGES[i].feature) this.featured.push(IMAGES[i]);
    }
  }

}
