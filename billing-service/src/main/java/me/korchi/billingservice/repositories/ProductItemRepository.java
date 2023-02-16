package me.korchi.billingservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import me.korchi.billingservice.entities.ProductItem;

import java.util.Collection;

@RepositoryRestResource
public interface ProductItemRepository extends JpaRepository<ProductItem, Long> {

    public Collection<ProductItem> findByBillId(Long id);
}
