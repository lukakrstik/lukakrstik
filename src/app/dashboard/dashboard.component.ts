import { Component, OnInit } from '@angular/core';
import { Image } from '../../image';
import { IMAGES } from "../images";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private clockInterval: any;
  private channelInterval: any;
  public text: string[] = [];
  hover(ch: string, asset: string, text: string){
    console.log("in")
    let image = document.getElementById("tv")
    let chEl = document.getElementById("ch")
    this.text = text.split(" ")
    // @ts-ignore
    image.src = "assets/" + asset;
    // @ts-ignore
    chEl.innerText = "CH" + ch;
    // @ts-ignore
    chEl.style.display = "block"
    this.channelInterval = setTimeout(()=> {
      // @ts-ignore
      chEl.style.display = "none";
    },3000)
  }

  constructor(public router: Router) {}


  ngOnInit() {

    document.body.classList.add('glitchBG');
    document.body.classList.remove('newBG');
    this.clockInterval = setInterval(()=>{
      var currentTime=(new Date()).toLocaleTimeString();
      // @ts-ignore
      document.getElementById('clock').innerHTML=`${currentTime}`;
    }, 1000);
  }
  ngOnDestroy() {
    document.body.classList.add('normalBG');
    document.body.classList.remove('glitchBG');
    clearInterval(this.clockInterval)
  }
}
