package com.example.usermetadata;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
public class UsermetadataApplication {

	public static void main(String[] args) {
		SpringApplication.run(UsermetadataApplication.class, args);
	}

}
