import { Component, OnInit } from '@angular/core';
import { Image } from "../../image";
import { IMAGES } from "../images";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  allphotos: Image[] = IMAGES;
  constructor() { }

  ngOnInit(): void {
  }

  linkce:string = "";
  displayFull(newLink:string) {
    this.linkce = newLink;
    document.getElementById('cover')!.style.display = 'flex';
  }
  closeDisplay(event:any) {
    if(event.path[0].tagName != 'IMG')
      document.getElementById('cover')!.style.display = 'none';
  }
}
