import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SaleComponent} from './sale.component';

const salesRoutes: Routes = [
  {path: 'sales', component: SaleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(salesRoutes)],
  exports: [RouterModule]
})

export class SaleRoutingModule {
}