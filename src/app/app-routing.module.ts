import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemPageComponent } from './Pages/item-page/item-page.component';

const routes: Routes = [
  {
    path: "", component: ItemPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
