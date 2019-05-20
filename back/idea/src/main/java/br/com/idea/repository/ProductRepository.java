package br.com.idea.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.idea.model.Product;

public interface ProductRepository extends CrudRepository<Product, Long> {

}
