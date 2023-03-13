import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AlbumsComponent } from './albums/albums.component';
import { TagphotosComponent } from './gallery/tagphotos/tagphotos.component';
import { AnalogComponent } from './gallery/analog/analog.component';
import { DigitalComponent } from './gallery/digital/digital.component';
import { DevComponent } from './dev/dev.component';
import { ExhibitComponent } from './exhibit/exhibit.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NavbarComponent,
    DashboardComponent,
    GalleryComponent,
    AlbumsComponent,
    TagphotosComponent,
    AnalogComponent,
    DigitalComponent,
    DevComponent,
    ExhibitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
