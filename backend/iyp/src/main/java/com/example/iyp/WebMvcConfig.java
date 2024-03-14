package com.example.iyp;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer{
	
	
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
		.allowedOrigins("http://localhost:3000")
		.allowedMethods("OPTIONS", "GET", "POST", "PUT", "DELETE", "HEAD")
		.maxAge(300)
		.allowedHeaders("Authorization", "Cache-Control", "Content-Type");
	}
}
