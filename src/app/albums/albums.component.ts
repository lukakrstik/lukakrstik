import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('bgLine');
  }
  ngOnDestroy(): void {
    document.body.classList.remove('bgLine');
  }
}
