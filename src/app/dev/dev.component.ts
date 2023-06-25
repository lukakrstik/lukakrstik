import { Component, OnInit } from '@angular/core';
import { Project } from "../../project";
import { PROJECTS } from "../projects";

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.css']
})
export class DevComponent implements OnInit {
  allprojects: Project[] = PROJECTS;
  constructor() { }

  ngOnInit(): void {
  }

}
