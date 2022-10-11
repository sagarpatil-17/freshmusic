import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BollywoodSongsListComponent } from './components/bollywood-songs-list/bollywood-songs-list.component';
import { BollywoodSongsPlayComponent } from './components/bollywood-songs-play/bollywood-songs-play.component';
import { BollywoodSongsPlay2Component } from './components/bollywood-songs-play2/bollywood-songs-play2.component';
import { BollywoodSongsPlay3Component } from './components/bollywood-songs-play3/bollywood-songs-play3.component';
import { BollywoodSongsComponent } from './components/bollywood-songs/bollywood-songs.component';
import { HomeComponent } from './components/home/home.component';
import { NewReleasesListComponent } from './components/new-releases-list/new-releases-list.component';
import { NewReleasesPlayComponent } from './components/new-releases-play/new-releases-play.component';
import { OldSongsListComponent } from './components/old-songs-list/old-songs-list.component';
import { OldSongsPlayComponent } from './components/old-songs-play/old-songs-play.component';
import { PremiumComponent } from './components/premium/premium.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TrandingSongsListComponent } from './components/tranding-songs-list/tranding-songs-list.component';
import { TrandingSongsPlayComponent } from './components/tranding-songs-play/tranding-songs-play.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  // {path: '', redirectTo: '', pathMatch: 'full'},
  { path: "signin", component: SignInComponent },
  { path: "signup", component: SignUpComponent },
  { path: "bollywood-songs", component: BollywoodSongsComponent },
  { path: "bollywood-songs/:id", component: BollywoodSongsListComponent },
  { path: "bollywood-songs-play/:id", component: BollywoodSongsPlayComponent },
  { path: "bollywood-songs-play2/:id", component: BollywoodSongsPlay2Component },
  { path: "bollywood-songs-play3/:id", component: BollywoodSongsPlay3Component },
  { path: "tranding-songs-list", component: TrandingSongsListComponent, canActivate: [AuthGuard] },
  { path: "tranding-songs-play/:id", component: TrandingSongsPlayComponent },
  { path: "new-releases-list", component: NewReleasesListComponent },
  { path: "new-releases-play/:id", component: NewReleasesPlayComponent },
  { path: "old-songs-list", component: OldSongsListComponent },
  { path: "old-songs-play/:id", component: OldSongsPlayComponent },
  { path: "premium", component: PremiumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
