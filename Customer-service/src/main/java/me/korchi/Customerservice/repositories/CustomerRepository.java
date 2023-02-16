package me.korchi.Customerservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import me.korchi.Customerservice.entities.Customer;

@RepositoryRestResource
public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
