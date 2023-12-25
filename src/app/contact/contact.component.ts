import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['./contact.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class ContactComponent implements OnInit {
  age:number = 0;
  dateBirth:Date = new Date("10/10/2002")
  constructor() { }
  ngOnInit(): void {
    document.body.classList.add('gradRGB');
    var diff = Date.now() - this.dateBirth.getTime();
    var convert = new Date(diff)
    this.age = Math.abs(convert.getUTCFullYear()-1970);
  }
  ngOnDestroy(): void {
    document.body.classList.remove('gradRGB');
  }
}
