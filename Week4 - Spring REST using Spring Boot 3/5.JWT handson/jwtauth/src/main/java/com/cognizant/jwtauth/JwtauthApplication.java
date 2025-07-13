package com.cognizant.jwtauth;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class JwtauthApplication {

	public static void main(String[] args) {
		SpringApplication.run(JwtauthApplication.class, args);
	}

}