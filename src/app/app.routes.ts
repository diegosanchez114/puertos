import { Routes } from '@angular/router';
import { GeneralComponent } from './components/general/general.component';
import { CrearComponent } from './components/puertos/crear/crear.component';

export const routes: Routes = [
    {path: '', component: CrearComponent},
    {path: '**', component: CrearComponent}
];
