import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { AlbumsComponent } from "./albums/albums.component";
import { DigitalComponent } from "./gallery/digital/digital.component";
import { AnalogComponent } from "./gallery/analog/analog.component";
import { DevComponent } from "./dev/dev.component";

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Contact', component: ContactComponent },
  { path: 'Home', component: DashboardComponent },
  { path: 'Gallery', component: GalleryComponent },
  { path: 'Albums', component: AlbumsComponent },
  { path: 'Digital', component: DigitalComponent },
  { path: 'Analog', component: AnalogComponent },
  { path: 'Dev', component: DevComponent },
  { path: '**', pathMatch:'full', component: DashboardComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
