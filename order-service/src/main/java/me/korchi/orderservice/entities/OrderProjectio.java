package me.korchi.orderservice.entities;

import org.springframework.data.rest.core.config.Projection;

import me.korchi.orderservice.enums.OrderStatus;
import me.korchi.orderservice.models.Customer;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;

@Projection(types = Order.class, name = "full")
public interface OrderProjectio {
     String getId();
     Date getCreated();
     OrderStatus getStatus();
     Long getCustomerId();
     Customer getCustomer();
     Collection<ProductItem> getGroducts();
}

