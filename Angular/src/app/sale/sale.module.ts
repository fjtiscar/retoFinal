import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleComponent } from './sale.component';
import { SaleListComponent } from './sale-list/sale-list.component';
import{ SaleService } from './sale.service';
import{ HttpClientModule } from '@angular/common/http';
import {SaleRoutingModule} from './sale-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SaleRoutingModule,
    HttpClientModule
  ],
  declarations: [
    SaleComponent, 
    SaleListComponent
    ],
  providers: [
    SaleService,
    HttpClientModule
  ]
})
export class SaleModule { }
