package me.korchi.orderservice.repositories;

import org.aspectj.weaver.ast.Or;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import me.korchi.orderservice.entities.Order;
import me.korchi.orderservice.entities.ProductItem;

import java.util.Collection;

@RepositoryRestResource
public interface OrderRepository extends JpaRepository<Order, String> {
    Collection<Order> findAllByCustomerId(Long id);
}
