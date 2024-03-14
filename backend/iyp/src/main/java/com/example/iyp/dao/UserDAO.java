package com.example.iyp.dao;

import org.springframework.stereotype.Repository;

import com.example.iyp.dto.UserDTO;
import com.example.iyp.mapper.UserMapper;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class UserDAO {
	
	private final UserMapper userMapper;
	
	// 로그인
	public String login(String id) {
		return userMapper.login(id);
	}
	
	// 회원정보 조회
	public UserDTO select_user(String id) {
		return userMapper.select_user(id);
	}
	
	// 회원가입 
	public int join(UserDTO userDTO) {
		return userMapper.join(userDTO);
	}

}
