import { Component, OnInit } from '@angular/core';
import { Image } from '../../image';
import { IMAGES } from "../images";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    document.body.classList.add('glitchBG');
    document.body.classList.remove('normalBG');
  }
  ngOnDestroy(){
    document.body.classList.add('normalBG');
    document.body.classList.remove('glitchBG');
  }
}
