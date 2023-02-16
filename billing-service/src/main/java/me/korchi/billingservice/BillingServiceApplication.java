package me.korchi.billingservice;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.hateoas.PagedModel;

import me.korchi.billingservice.entities.Bill;
import me.korchi.billingservice.entities.ProductItem;
import me.korchi.billingservice.feign.CustomerRestClient;
import me.korchi.billingservice.feign.ProductItemRestClient;
import me.korchi.billingservice.models.Customer;
import me.korchi.billingservice.models.Product;
import me.korchi.billingservice.repositories.BillRepository;
import me.korchi.billingservice.repositories.ProductItemRepository;

import java.util.Collection;
import java.util.Date;
import java.util.Random;

@SpringBootApplication
@EnableFeignClients //////////
public class BillingServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(BillingServiceApplication.class, args);
	}

	@Bean
	CommandLineRunner start(BillRepository br,
							ProductItemRepository pir,
							CustomerRestClient crc,
							ProductItemRestClient prc)
	{
		return args -> {

			Customer customer = crc.getCustomer(1L);
			Bill bill = new Bill(null, new Date(), customer.getId(), null, null);
			br.save(bill);
			PagedModel<Product> productsPage = prc.pageProducts(0, 20);
			productsPage.forEach(p -> {
				ProductItem productItem = new ProductItem();
				productItem.setPrice(p.getPrice());
				productItem.setProductId(p.getId());
				productItem.setQuantity(new Random().nextInt(50) + 1);
				productItem.setBill(bill);
				pir.save(productItem);
			});
			/*Collection<Customer> customers = crc.getCustomers();
			customers.forEach(c -> {
				System.out.println(c.getEmail());
			});
			Customer customer = crc.getCustomer(1L);
			System.out.println(customer.getEmail());
			System.out.println(customer.getId());
			*/
			// 43 : 00

		};
	}

}
