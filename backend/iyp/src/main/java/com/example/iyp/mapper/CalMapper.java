package com.example.iyp.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.example.iyp.dto.CalDTO;

@Mapper
public interface CalMapper {
	
	// 일정 등록
	public int insert (CalDTO calDTO);

}
