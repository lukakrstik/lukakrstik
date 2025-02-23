import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-exhibit',
  templateUrl: './exhibit.component.html',
  styleUrls: ['./exhibit.component.css']
})
export class ExhibitComponent implements OnInit {
  private clockInterval: any;
  private programInterval: any;
  private channelInterval: any;
  public text: string[] = [];
  public programArray: string[] = ["CHA%%EL GUIDE", "CH^NNEL GU/DE", "CHNNNEL GUIOE", "CHANNEL GVIDE","CHANNEL GUIDE"]
  public program: string = ""
  hover(ch: string, asset: string, text: string){
    console.log("in")
    let image = document.getElementById("tv")
    let chEl = document.getElementById("ch")
    this.text = text.split(" ")
    // @ts-ignore
    image.src = "assets/" + asset;
    // @ts-ignore
    image.play()
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
    this.program = "CHANNEL GUIDE"
    let i = 0;
    this.programInterval = setInterval(() => {
      this.program = this.programArray[i%this.programArray.length]
      i++;
    },400)
    document.body.classList.add('glitchBG');
    document.body.classList.remove('newBG');
    this.clockInterval = setInterval(()=>{
      var currentTime=(new Date()).toLocaleTimeString();
      // @ts-ignore
      document.getElementById('clock').innerHTML=`${currentTime}`;
    }, 1000);
    let video = document.getElementById("tv")
    // @ts-ignore
    video.play()
  }
  ngOnDestroy() {
    clearInterval(this.clockInterval)
    clearTimeout(this.channelInterval)
    clearTimeout(this.programInterval)
  }
}

