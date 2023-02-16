package me.korchi.orderservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import me.korchi.orderservice.entities.ProductItem;

@RepositoryRestResource
public interface ProductItemRepository extends JpaRepository<ProductItem, Long> {
}
