package com.sidneyrod.dscatalog.tests.factory;

import java.time.Instant;

import com.sidneyrod.dscatalog.dto.ProductDTO;
import com.sidneyrod.dscatalog.entities.Product;

public class ProductFactory {

	public static Product createProduct() {
		return new Product(1L, "Phone", "Good Phone", 800.0, "https://img.com/img.png", Instant.parse("2021-04-28T03:00:00Z"));
	}
	
	public static ProductDTO createProductDTO() {
		return new ProductDTO(createProduct());
	}
}
