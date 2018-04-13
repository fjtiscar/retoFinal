import { Component, OnInit } from '@angular/core';
import { Sale } from '../sale'
import { SaleService } from '../sale.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.css']
})
export class SaleListComponent implements OnInit {
 
  sales: Sale[];
  errorMessage: string;

  

  constructor(private saleService: SaleService, private router: Router) {
    this.sales = [];
  }

  ngOnInit() {
    this.saleService.getSalesNotExpired().subscribe(resp =>{
      this.sales = resp.body;
    })
  }

  gotoHome() {
    // TODO not completed
  }


  deleteSale(id){
     this.saleService.deleteSale(id).subscribe(resp =>{
      location.reload()
    })
  }
  addSale(){
    this.router.navigateByUrl('/addSale');
  } 
}


