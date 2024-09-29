import { Routes } from '@angular/router';
import { EjecutarComponent } from './modules/ejecutar/ejecutar.component';
import { HistorialComponent } from './modules/historial/historial.component';
import { RegistrarComponent } from './modules/registrar/registrar.component';

export const routes: Routes = [
    { path : "", redirectTo : "ejecutar", pathMatch : "full" },
    { path : "ejecutar", component : EjecutarComponent },
    { path : "registrar", component : RegistrarComponent },
    { path : "historial", component : HistorialComponent }
];
