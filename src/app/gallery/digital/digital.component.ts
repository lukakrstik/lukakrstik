import { Component, OnInit } from '@angular/core';
import { Image } from "../../../image";
import { IMAGES } from "../../images";

@Component({
  selector: 'app-digital',
  templateUrl: './digital.component.html',
  styleUrls: ['./digital.component.css']
})
export class DigitalComponent implements OnInit {
  digital: Image[] = [];

  constructor() { }

  ngOnInit(): void {
      for(let i=0; i<IMAGES.length; i++){
      if(IMAGES[i].type === 'digital') this.digital.push(IMAGES[i]);
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
