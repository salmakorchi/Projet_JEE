package me.korchi.billingservice.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import me.korchi.billingservice.models.Customer;
import me.korchi.billingservice.models.Product;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;
@Entity
@Data @AllArgsConstructor @NoArgsConstructor
public class Bill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date date;
    private Long customerId;
    @OneToMany(mappedBy = "bill")
    private Collection<ProductItem> productItems;
    @Transient
    private Customer customer;

}
