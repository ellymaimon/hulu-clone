import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { TelevisionComponent } from './television/television.component';
import { MoviesComponent } from './movies/movies.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TelevisionComponent,
    MoviesComponent,
    ShowDetailComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
