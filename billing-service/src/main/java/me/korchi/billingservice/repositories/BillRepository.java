package me.korchi.billingservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import me.korchi.billingservice.entities.Bill;

@RepositoryRestResource
public interface BillRepository extends JpaRepository<Bill, Long> {
}
