import { Component, OnInit } from '@angular/core';
import { Image } from '../../image';
import { IMAGES } from "../images";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  featured: Image[] = IMAGES;
  constructor() { }

  ngOnInit(): void {
  }

}
