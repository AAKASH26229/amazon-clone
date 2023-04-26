package com.example.productdetailsservice.Entity;

import java.math.BigInteger;
import java.util.Date;
import java.util.UUID;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Document
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public BigInteger id;
	
	public UUID productID;
	public String name;
	public double price;
	public double rating;
	public String imageURL;
	public double oprice;
	public double save;
	//public Date prime;
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Product(BigInteger id, UUID productID, String name, double price, double rating, String imageURL,
			double oprice, double save) {
		super();
		this.id = id;
		this.productID = productID;
		this.name = name;
		this.price = price;
		this.rating = rating;
		this.imageURL = imageURL;
		this.oprice = oprice;
		this.save = save;
		//this.prime = prime;
	}
	public BigInteger getId() {
		return id;
	}
	public void setId(BigInteger id) {
		this.id = id;
	}
	public UUID getProductID() {
		return productID;
	}
	public void setProductID(UUID productID) {
		this.productID = productID;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public double getRating() {
		return rating;
	}
	public void setRating(double rating) {
		this.rating = rating;
	}
	public String getImageURL() {
		return imageURL;
	}
	public void setImageURL(String imageURL) {
		this.imageURL = imageURL;
	}
	public double getOprice() {
		return oprice;
	}
	public void setOprice(double oprice) {
		this.oprice = oprice;
	}
	public double getSave() {
		return save;
	}
	public void setSave(double save) {
		this.save = save;
	}
//	public Date getPrime() {
//		return prime;
//	}
//	public void setPrime(Date prime) {
//		this.prime = prime;
//	}
	
	
	
	
	
	
	
	
}
