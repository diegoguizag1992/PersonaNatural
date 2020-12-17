import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearproveedoresComponent } from './component/logeado/crearproveedores/crearproveedores.component';
import { PersonaJuridicaComponent } from './component/logeado/persona-juridica/persona-juridica.component';

const routes: Routes = [
  {
    path: 'proveedores',
    component: CrearproveedoresComponent
  },
  {
    path: 'persona',
    component: PersonaJuridicaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
