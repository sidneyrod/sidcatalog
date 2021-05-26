package com.sidneyrod.dscatalog.tests.factory;

import java.time.Instant;

import com.sidneyrod.dscatalog.dto.ProductDTO;
import com.sidneyrod.dscatalog.entities.Category;
import com.sidneyrod.dscatalog.entities.Product;

public class ProductFactory {

	public static Product createProduct() {
		Product product = new Product(1L, "Phone", "Good Phone", 800.0, "https://img.com/img.png", Instant.parse("2021-05-25T03:00:00Z"));
		product.getCategories().add(new Category(1L, null));
		return product;
	}
	
	public static ProductDTO createProductDTO() {
		Product product = createProduct();
		return new ProductDTO(product, product.getCategories());
	}
	
	public static ProductDTO createProductDTO(Long id) {
		ProductDTO dto = createProductDTO();
		dto.setId(id);
		return dto;
	}
}