import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TelevisionComponent }   from './television/television.component';
import { MoviesComponent } from './movies/movies.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';

const appRoutes: Routes = [
  {
  path: '',
  component: WelcomeComponent
  },
  {
    path: 'tv',
    component: TelevisionComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'tv/:id',
    component: ShowDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);