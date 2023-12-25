import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['./contact.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class ContactComponent implements OnInit {
  age:number = 0;
  date:Date = new Date()
  constructor() { }
  ngOnInit(): void {
    document.body.classList.add('gradRGB');
    if (this.date.getMonth() >= 10) this.age = this.date.getFullYear() - 2002;
    else this.age = this.date.getFullYear()-2003;
  }
  ngOnDestroy(): void {
    document.body.classList.remove('gradRGB');
  }
}
