import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JogadoresComponent } from './jogadores/jogadores.component';
import { HomeComponent } from './home/home.component';

// Rota para home e jogadores criadas e apontando para o componente
const routes: Routes = [
  {path: 'jogadores', component: JogadoresComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
