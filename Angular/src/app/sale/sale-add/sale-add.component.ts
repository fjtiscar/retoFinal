import { Component, OnInit } from '@angular/core';
import { Sale } from '../sale';
import {NgForm} from '@angular/forms';
import {SaleService} from '../sale.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-sale',
  templateUrl: './sale-add.component.html',
  styleUrls: ['./sale-add.component.css']
})
export class SaleAddComponent implements OnInit {

  sale:Sale={
    id: undefined,
    title: undefined,
    description : undefined,
    discount : undefined,
    expirationDate : new Date()
  };

  constructor(private service:SaleService, private router: Router) { }

  ngOnInit() {
  }

  saleUp(){
    this.service.addSale(this.sale).subscribe(resp =>{
    this.router.navigateByUrl('/sales');
    })
  }

   reset(saleForm: NgForm){
    saleForm.reset();
  }

}
