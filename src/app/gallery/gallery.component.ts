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

}
