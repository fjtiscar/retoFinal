package org.springframework.samples.petclinic.rest;


import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.samples.petclinic.model.Sale;
import org.springframework.samples.petclinic.service.SaleService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(exposedHeaders = "errors, content-type")
@RequestMapping("api")
public class SaleController {
	
	@Autowired
	SaleService saleService;

	@RequestMapping(value = "/sales", method = RequestMethod.GET)
	public List<Sale> findAll(){
		return saleService.getAll();
	}
	
	@RequestMapping(value = "/sales", method = RequestMethod.POST)
	public ResponseEntity<Sale> addSale(@RequestBody Sale sale){
		
		if(sale!=null) {
			Sale s = saleService.save(sale);
			return ResponseEntity.status(HttpStatus.CREATED).body(s);
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}
		
	}
	
	@RequestMapping(value = "/sales/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Sale> deleteBill(@PathVariable("id") Integer id){
		Sale sale2 = saleService.getOne(id);
		
		if(sale2!=null) {
			saleService.delete(id);
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}
		
		
	}
	
	@RequestMapping(value = "/sales/{id}", method = RequestMethod.GET)
	public ResponseEntity<Sale> findById(@PathVariable("id") Integer id){
		Sale s = saleService.getOne(id);
		if(s!=null) {
			return ResponseEntity.status(HttpStatus.OK).body(s);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
		}
	}
	
	@RequestMapping(value = "/sales/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Sale> addSale(@PathVariable("id") Integer id,@RequestBody Sale sale){
		Sale saleId = saleService.getOne(id);
		if(saleId!=null) {
			if(sale.getTitle()==null) {
				saleId.setTitle(saleId.getTitle());
			} else {
				saleId.setTitle(sale.getTitle());
			}
			if(sale.getDescription()==null) {
				saleId.setDescription(saleId.getDescription());
			} else {
				saleId.setDescription(sale.getDescription());
			}
			if (sale.getDiscount()==0.0) {
				saleId.setDiscount(saleId.getDiscount());
			} else {
				saleId.setDiscount(sale.getDiscount());
			}
			if (sale.getExpirationDate()==null) {
				saleId.setExpirationDate(saleId.getExpirationDate());
			} else {
				saleId.setExpirationDate(sale.getExpirationDate());
			}
			saleService.save(saleId);
			return ResponseEntity.status(HttpStatus.OK).body(saleId);
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}
		
	}
	
	@RequestMapping(value = "/sales/fecha", method = RequestMethod.GET)
	public List<Sale> findAllByDate(){
    	Date d = new Date();
		return saleService.findByExpirationDateAfter(d);
	}
	
	
}
