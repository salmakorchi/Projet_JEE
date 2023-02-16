package me.korchi.kafkabillingproducer;



import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;


@SpringBootApplication
@EnableFeignClients
public class KafkaBillingProducerApplication {

	public static void main(String[] args) {
		SpringApplication.run(KafkaBillingProducerApplication.class, args);
	}




}
