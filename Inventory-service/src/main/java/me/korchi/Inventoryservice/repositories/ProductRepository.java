package me.korchi.Inventoryservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import me.korchi.Inventoryservice.entities.Product;

@RepositoryRestResource
public interface ProductRepository extends JpaRepository<Product, String> {
}
