import { Component, OnInit } from '@angular/core';
import { Sale } from '../sale'
import { SaleService } from '../sale.service'

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.css']
})
export class SaleListComponent implements OnInit {

  sales: Sale[];
  errorMessage: string;

  constructor(private saleService: SaleService) {
    this.sales = [];
  }

  ngOnInit() {
    this.saleService.getSales().subscribe(resp =>{
      this.sales = resp.body;
    })
  }

  gotoHome() {
    // TODO not completed
  }

  addSale() {
    // TODO not completed
  }

}


