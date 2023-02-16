package me.korchi.orderservice.feign;


import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.hateoas.PagedModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import me.korchi.orderservice.models.Product;

@FeignClient(name = "PRODUCT-SERVICE")
public interface ProductItemRestClient {

    @GetMapping(path = "/products?projection=full")
    PagedModel<Product> pageProducts(@RequestParam(name = "page") int page,
                                     @RequestParam(name = "size") int size);
    @GetMapping(path = "/products/{id}?projection=full")
    Product getProductById(@PathVariable String id);
}
