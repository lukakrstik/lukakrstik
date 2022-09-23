import { Component, OnInit } from '@angular/core';
import { Tag } from "../../../tag";
import {Image} from "../../../image";

@Component({
  selector: 'app-tagphotos',
  templateUrl: './tagphotos.component.html',
  styleUrls: ['./tagphotos.component.css']
})
export class TagphotosComponent implements OnInit {
  Tags: Tag[] = [
    {
      name: 'Analog',
      tag: '/',
      color: true,
      tlink: '../assets/SC1.jpg',
    },
    {
      name: 'Digital',
      tag: '/',
      color: true,
      tlink: '../assets/SC2.jpg',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
