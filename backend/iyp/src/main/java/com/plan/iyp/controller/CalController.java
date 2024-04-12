package com.plan.iyp.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/cal")
@RequiredArgsConstructor
public class CalController {
	
	@PostMapping("/todo")
	public String todo() {
		return "test";
	}
	

}
