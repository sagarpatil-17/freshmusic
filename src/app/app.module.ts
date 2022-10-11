import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';
import { SubNavbarComponent } from './components/sub-navbar/sub-navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BollywoodSongsComponent } from './components/bollywood-songs/bollywood-songs.component';
import { HttpClientModule } from '@angular/common/http';
import { TrandingSongsComponent } from './components/tranding-songs/tranding-songs.component';
import { NewReleasesComponent } from './components/new-releases/new-releases.component';
import { FooterComponent } from './components/footer/footer.component';
import { OldSongsComponent } from './components/old-songs/old-songs.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { BollywoodSongsListComponent } from './components/bollywood-songs-list/bollywood-songs-list.component';
import { BollywoodSongsPlayComponent } from './components/bollywood-songs-play/bollywood-songs-play.component';
import { BollywoodSongsPlay2Component } from './components/bollywood-songs-play2/bollywood-songs-play2.component';
import { BollywoodSongsPlay3Component } from './components/bollywood-songs-play3/bollywood-songs-play3.component';
import { TrandingSongsListComponent } from './components/tranding-songs-list/tranding-songs-list.component';
import { NewReleasesListComponent } from './components/new-releases-list/new-releases-list.component';
import { OldSongsListComponent } from './components/old-songs-list/old-songs-list.component';
import { TrandingSongsPlayComponent } from './components/tranding-songs-play/tranding-songs-play.component';
import { NewReleasesPlayComponent } from './components/new-releases-play/new-releases-play.component';
import { OldSongsPlayComponent } from './components/old-songs-play/old-songs-play.component';
import { UserComponent } from './components/user/user.component';
import { PremiumComponent } from './components/premium/premium.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SubNavbarComponent,
    CarouselComponent,
    BollywoodSongsComponent,
    TrandingSongsComponent,
    NewReleasesComponent,
    FooterComponent,
    OldSongsComponent,
    SignInComponent,
    SignUpComponent,
    BollywoodSongsListComponent,
    BollywoodSongsPlayComponent,
    BollywoodSongsPlay2Component,
    BollywoodSongsPlay3Component,
    TrandingSongsListComponent,
    NewReleasesListComponent,
    OldSongsListComponent,
    TrandingSongsPlayComponent,
    NewReleasesPlayComponent,
    OldSongsPlayComponent,
    UserComponent,
    PremiumComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
