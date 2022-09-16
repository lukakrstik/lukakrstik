import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GalleryComponent } from "./gallery/gallery.component";

const routes: Routes = [
  { path: 'Contact', component: ContactComponent },
  { path: 'Home', component: DashboardComponent },
  { path: 'Gallery', component: GalleryComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
