import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild
} from '@angular/core';
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

  @ViewChild("btn") private btn: ElementRef | undefined;
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.btn) {
      let el = this.btn.nativeElement;
      if (!el.contains(event.target)) {
        this.menuBool = false; // Hide menu on outside click
      }
    }
  }

  ngOnInit(): void {
    setInterval(() => {
      if(this.counter < 9999)
      this.counter += 1;
    },1000)
  }

}
