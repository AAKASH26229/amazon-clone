package com.example.productdetailsservice.Repository;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.UUID;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.productdetailsservice.Entity.Product;

public interface ProductRepo extends MongoRepository<Product, BigInteger> {

	
	Product save(Product product);
	ArrayList<Product> findAll();
	Product findByProductID(UUID productId);
	
	
}
