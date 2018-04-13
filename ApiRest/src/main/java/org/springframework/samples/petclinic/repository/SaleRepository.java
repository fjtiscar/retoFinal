package org.springframework.samples.petclinic.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.samples.petclinic.model.Sale;
import org.springframework.stereotype.Repository;

@Repository
public interface SaleRepository extends JpaRepository<Sale, Integer> {
	
	/*
	@Query("select * from Sale s where s.expiredDate < :d ")
   	@Transactional(readOnly = true)
   	List<Sale> getSaleNotExpired(@Param("d") Date d);*/
	
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	public List<Sale> findByExpirationDateAfter(Date d);

}
