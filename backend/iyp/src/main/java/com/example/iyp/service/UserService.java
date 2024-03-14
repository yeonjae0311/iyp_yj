package com.example.iyp.service;

import org.springframework.stereotype.Service;

import com.example.iyp.dao.UserDAO;
import com.example.iyp.dto.UserDTO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
	
	private final UserDAO userDAO;

	// 로그인
	public String login(String id){
		return userDAO.login(id);
	}
	
	// 회원정보 조회
	public UserDTO select_user(String id) {
		return userDAO.select_user(id);
	}
	
	// 회원가입
	public int join(UserDTO userDTO) {
		return userDAO.join(userDTO);
	}
}
