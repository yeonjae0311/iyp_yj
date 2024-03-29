package com.example.iyp.controller;

import java.util.regex.Pattern;

import org.springframework.stereotype.Component;

import com.example.iyp.dto.UserDTO;

@Component
public class JoinValidator {
	
	public boolean idValid(String id) {
		return Pattern.matches("^[A-Za-z0-9]*$", id);
	}
	
	public boolean emailValid(String email) {
		return Pattern.matches("^[a-z0-9A-Z._-]*@[a-z0-9A-Z]*.[a-zA-Z.]*$", email);
	}
	
	public boolean pwValid(String pw) {
		return Pattern.matches("^(?=.*[a-zA-Z])(?=.*\\d)(?=.*\\W).{4,8}$", pw);
	}
	
	public boolean nameValid(String name) {
		return Pattern.matches("^[ㄱ-ㅎ가-힣a-zA-Z]+$", name);
	}
	
	public String Valid(UserDTO userDTO) {

		boolean id = idValid(userDTO.getId());
		boolean email = emailValid(userDTO.getEmail());
		boolean name = nameValid(userDTO.getName());
		boolean pw = pwValid(userDTO.getPassword());
		
		if(id && email && name && pw ) {
			return "true";
		} else if(name == false){
			return "name";
		} else if(id == false) {
			return "id";
		} else if(email == false) {
			return "email";
		} else if(pw == false) {
			return "pw";
		}
		
		return "error";

	}
}
