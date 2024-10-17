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
import {ExhibitComponent} from "./exhibit/exhibit.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about-me', component: ContactComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'art', component: GalleryComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'digital', component: DigitalComponent },
  { path: 'analog', component: AnalogComponent },
  { path: 'dev', component: DevComponent },
  { path: 'exhibit', component: ExhibitComponent},
  { path: '**', pathMatch:'full', component: DashboardComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
