package org.springframework.samples.petclinic.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.samples.petclinic.model.Sale;
import org.springframework.samples.petclinic.repository.SaleRepository;
import org.springframework.stereotype.Service;

@Service
public class SaleService {
	
	@Autowired
	SaleRepository saleRepository;
	
	public List<Sale> getAll() {
		return saleRepository.findAll();
	}
	
	
	public Sale getOne(Integer saleId) {
		return saleRepository.findOne(saleId);
	}

	public Sale save(Sale s) {
		return saleRepository.save(s);
	}
	
	public void delete(Integer id) {
		saleRepository.delete(id);
	}

	public List<Sale> findByExpirationDateAfter(Date d){
		return saleRepository.findByExpirationDateAfter(d);
	}

}
