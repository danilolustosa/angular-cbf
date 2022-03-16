import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClubeViewComponent } from './clube-view/clube-view.component';
import { JogoComponent } from './jogo/jogo.component';

const routes: Routes = [
  { path: 'jogo', component: JogoComponent },
  { path: 'clube', component: ClubeViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
