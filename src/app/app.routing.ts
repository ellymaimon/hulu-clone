import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TelevisionComponent }   from './television/television.component';

const appRoutes: Routes = [
  {
  path: '',
  component: WelcomeComponent
  },
  {
    path: 'tv',
    component: TelevisionComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);