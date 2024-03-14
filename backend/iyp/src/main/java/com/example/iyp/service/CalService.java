package com.example.iyp.service;

import org.springframework.stereotype.Service;

import com.example.iyp.dao.CalDAO;
import com.example.iyp.dto.CalDTO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CalService {
	
	private final CalDAO calDAO;

	// 일정 등록
	// 회원정보 조회
	public int insert(CalDTO calDTO) {
		return calDAO.insert(calDTO);
	}
}
