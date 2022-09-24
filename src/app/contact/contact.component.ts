import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['./contact.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('gradRGB');
  }
  ngOnDestroy(): void {
    document.body.classList.remove('gradRGB');
  }
}
