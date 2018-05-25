import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Routes, RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { AuthGuard } from './auth-guard.service';
import { HomeComponent } from './home.component';

const appRoutes:Routes = [
{ path: 'user' , component:HeroesComponent , canActivate: [AuthGuard]},
{ path: 'home' , component:HomeComponent },
{ path: 'admin' , component:HeroDetailComponent, canActivate: [AuthGuard] },
]

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     RouterModule.forRoot(
      appRoutes)
  ],
  providers: [HeroService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
