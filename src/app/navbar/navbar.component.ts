import { Component, OnInit } from '@angular/core';
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  counter: number;
  menuBool: boolean = false;


  constructor(public router: Router) {
    this.counter = 0
  }

  showMenu(){
    this.menuBool = !this.menuBool;
  }

  ngOnInit(): void {
    setInterval(() => {
      if(this.counter < 9999)
      this.counter += 1;
    },1000)
  }

}
