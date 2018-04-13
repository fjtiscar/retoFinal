import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleComponent } from './sale.component';
import { SaleListComponent } from './sale-list/sale-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SaleComponent, 
    SaleListComponent
    ]
})
export class SaleModule { }
