import { Routes } from '@angular/router';
import { CrearComponent } from './components/crear/crear.component';
import { ListarComponent } from './components/listar/listar.component';

export const routes: Routes = [
    {path: '', component: CrearComponent},
    {path: 'listar', component: ListarComponent},
    {path: '**', component: CrearComponent}
];
