import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { ListCajerosComponent } from './components/list-cajeros/list-cajeros.component';
import { NewCajeroComponent } from './components/new-cajero/new-cajero.component';
import { NewFoodComponent } from './foods/new-food/new-food.component';
import { ListFoodsComponent } from './foods/list-foods/list-foods.component';


const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'cajeros', component: ListCajerosComponent },
  { path: 'new_cajero', component: NewCajeroComponent },
  { path: 'new_cajero/:id', component: NewCajeroComponent },
  /* foods routes  */
  { path: 'new_food', component: NewFoodComponent },
  { path: 'new_food/:id', component: NewFoodComponent },
  { path: 'foods', component: ListFoodsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
