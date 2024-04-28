package com.plan.iyp.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.plan.iyp.entity.Schedule;

public interface CalRepository extends JpaRepository<Schedule, Long>{
	
	List<Schedule> findByMember_Id(Long id);
	
	Optional<Schedule> findBysIdx(Long sIdx);
	
}

