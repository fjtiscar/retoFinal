import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleComponent } from './sale.component';
import { SaleListComponent } from './sale-list/sale-list.component';
import{ SaleService } from './sale.service';
import{ HttpClientModule } from '@angular/common/http';
import {SaleRoutingModule} from './sale-routing.module';
import { SaleAddComponent } from './sale-add/sale-add.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    SaleRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    SaleComponent, 
    SaleListComponent, SaleAddComponent
    ],
  providers: [
    SaleService,
    HttpClientModule
  ]
})
export class SaleModule { }
