import { Component, OnInit } from '@angular/core';
import { Image } from "../../../image";
import { IMAGES } from "../../images";

@Component({
  selector: 'app-analog',
  templateUrl: './analog.component.html',
  styleUrls: ['./analog.component.css']
})
export class AnalogComponent implements OnInit {
analog: Image[] = [];
  constructor() { }

  ngOnInit(): void {
    for(let i=0; i<IMAGES.length; i++){
      if(IMAGES[i].type === 'analog') this.analog.push(IMAGES[i]);
    }
  }

}
