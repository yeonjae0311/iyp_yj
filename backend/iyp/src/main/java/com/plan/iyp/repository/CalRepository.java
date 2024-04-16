package com.plan.iyp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.plan.iyp.entity.Schedule;

public interface CalRepository extends JpaRepository<Schedule, Long>{
	
	List<Schedule> findByMember_Id(Long id);
	
}

