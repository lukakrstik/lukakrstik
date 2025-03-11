import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['./contact.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('gradient') gradientElement!: ElementRef;
  private animationTimeout: any = null;

  age:number = 0;
  dateBirth:Date = new Date("10/10/2002")
  constructor() { }
  ngOnInit(): void {

    var diff = Date.now() - this.dateBirth.getTime();
    var convert = new Date(diff)
    this.age = Math.abs(convert.getUTCFullYear()-1970);
  }

  protected readonly event = event;

  gradShift(event: MouseEvent): void {
    if (this.animationTimeout) {
      clearTimeout(this.animationTimeout); // Prevent multiple calls
    }
    this.animationTimeout = setTimeout(() => {
      let element = this.gradientElement.nativeElement;
      let x = event.clientX
      let cursorPercent = Math.round((x / this.gradientElement.nativeElement.clientWidth) * 100);
      let cursorPercentBehind = Math.round((x / this.gradientElement.nativeElement.clientWidth) * 100) - 2;


      let gradientPosition = `${cursorPercent}% ${cursorPercentBehind}%`;

      // Smoothly animate the background position
      element.style.backgroundPosition = gradientPosition;
    }, 200)
  }
}
