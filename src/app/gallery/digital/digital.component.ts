import { Component, OnInit } from '@angular/core';
import { Image } from "../../../image";
import { IMAGES } from "../../images";

@Component({
  selector: 'app-digital',
  templateUrl: './digital.component.html',
  styleUrls: ['./digital.component.css']
})
export class DigitalComponent implements OnInit {
  digital: Image[] = IMAGES;

  constructor() { }

  ngOnInit(): void {
  }

}
