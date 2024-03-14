package com.example.iyp.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.example.iyp.dto.UserDTO;

@Mapper
public interface UserMapper {
	
	// 회원 가입
	public int join();
	
	// 로그인
	public String login(String id);
	
	// 회원 조회
	public UserDTO select_user(String id);
	
	// 회원 가입
	public int join(UserDTO userDTO);
}
