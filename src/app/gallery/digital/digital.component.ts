import { Component, OnInit } from '@angular/core';
import { Image } from "../../../image";

@Component({
  selector: 'app-digital',
  templateUrl: './digital.component.html',
  styleUrls: ['./digital.component.css']
})
export class DigitalComponent implements OnInit {
  digital: Image[] = [
    {
      tag: 'urba',
      isColor: true,
      tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_2486UT.webp?raw=true',
      olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_2486UO.webp?raw=true'
    },
    {
      tag: 'urba',
      isColor: false,
      tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_3385UT.webp?raw=true',
      olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_3385UO.webp?raw=true'
    },
    {
      tag: 'urba',
      isColor: false,
      tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_2984UT.webp?raw=true',
      olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_2984UO.webp?raw=true'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
