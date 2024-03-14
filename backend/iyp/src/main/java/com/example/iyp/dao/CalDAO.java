package com.example.iyp.dao;

import org.springframework.stereotype.Repository;

import com.example.iyp.dto.CalDTO;
import com.example.iyp.mapper.CalMapper;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class CalDAO {
	
	private final CalMapper calMapper;
	
	// 일정 등록
	public int insert(CalDTO calDTO) {
		return calMapper.insert(calDTO);
	}
}
