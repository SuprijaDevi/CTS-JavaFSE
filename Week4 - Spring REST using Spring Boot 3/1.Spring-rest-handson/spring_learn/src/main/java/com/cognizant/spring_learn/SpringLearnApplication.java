package com.cognizant.spring_learn;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringLearnApplication {
    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
		SpringApplication.run(SpringLearnApplication.class, args);
		displayCountries(); // changed name here
	}
	
	public static void displayCountries() { // changed name here
		LOGGER.info("START - displayCountries()");
		ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
	
		List<Country> countryList = context.getBean("countryList", List.class);
		for (Country country : countryList) {
			LOGGER.debug("Country : {}", country.toString());
		}
	
		LOGGER.info("END - displayCountries()");
	}
	
}