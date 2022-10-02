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
  linkce:string = "";
  displayFull(newLink:string) {
    this.linkce = newLink;
    document.getElementById('cover')!.style.display = 'flex';
  }
  closeDisplay(event:any) {
    if((event.target as Element).tagName != 'IMG')
      document.getElementById('cover')!.style.display = 'none';
  }
}
