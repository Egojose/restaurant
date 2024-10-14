import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistroPageComponent } from './pages/registro-page/registro-page.component';


export const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    { 
      path: 'home', 
      component: HomeComponent
    },
    {
        path: 'registro',
        component: RegistroPageComponent
    }
];
