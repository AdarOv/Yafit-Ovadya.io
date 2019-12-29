import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HeroesComponent } from './heroes/heroes.component';
import { WorksComponent } from './works/works.component'
import { MainComponent } from './main/main.component'

const routes: Routes = [
  // { path: 'heroes', component: HeroesComponent }
  { path: '', component: MainComponent},
  { path: 'works', component: WorksComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
