package me.korchi.billingservice.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.hateoas.PagedModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import me.korchi.billingservice.models.Customer;

import java.util.Collection;

@FeignClient(name = "CUSTOMER-SERVICE")
public interface CustomerRestClient {

    @GetMapping(path = "/customers/{id}?projection=full")
    Customer getCustomer(@PathVariable(name = "id") Long id);

    @GetMapping(path = "/customers?projection=full")
    PagedModel<Customer> getCustomers();
}
