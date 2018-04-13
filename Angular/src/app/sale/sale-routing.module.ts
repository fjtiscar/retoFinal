import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SaleComponent} from './sale.component';
import {SaleAddComponent} from './sale-add/sale-add.component';

const salesRoutes: Routes = [
  {path: 'sales', component: SaleComponent},
  {path: 'addSale', component: SaleAddComponent}
];


@NgModule({
  imports: [RouterModule.forChild(salesRoutes)],
  exports: [RouterModule]
})

export class SaleRoutingModule {
}