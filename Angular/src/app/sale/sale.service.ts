import { Injectable } from '@angular/core';
import{ HttpClient, HttpResponse} from '@angular/common/http';
import{ Observable } from 'rxjs/Observable'
import{ Sale } from './sale'
import{ environment } from '../../environments/environment'

@Injectable()
export class SaleService {
  private url: string;

	constructor(private http: HttpClient) { 
		this.url =  environment.REST_API_URL+'sales';
	}

  getSales(): Observable<HttpResponse<Sale[]>>{
	return this.http.get<Sale[]>(this.url, {observe: 'response'});
	}

  addSale(sale: Sale): Observable<HttpResponse<any>>{
		return this.http.post(this.url, sale, {observe: 'response'})
	}

  deleteSale(sale: Sale): Observable<HttpResponse<any>>{
		return this.http.delete(this.url+'?id='+sale.id, {observe: 'response'})
	}

  modifySale(sale: Sale): Observable<HttpResponse<any>>{
		return this.http.put(this.url, sale, {observe: 'response'})
	}

  getSaleId(id: number): Observable<HttpResponse<Sale[]>>{
    return this.http.get<Sale[]>(this.url+'?id='+id, {observe: 'response'});
	}

}
