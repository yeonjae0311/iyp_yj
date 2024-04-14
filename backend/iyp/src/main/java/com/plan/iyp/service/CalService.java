package com.plan.iyp.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.plan.iyp.common.exception.ResourceNotFoundException;
import com.plan.iyp.dto.request.cal.CalInsertDTO;
import com.plan.iyp.dto.response.cal.ResCalInsertDTO;
import com.plan.iyp.dto.response.cal.ResCalListDTO;
import com.plan.iyp.entity.Member;
import com.plan.iyp.entity.Schedule;
import com.plan.iyp.repository.CalRepository;
import com.plan.iyp.repository.MemberRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class CalService {
	
		private final CalRepository calRepository;
		private final MemberRepository memberRepository;

	   public ResCalInsertDTO insert(CalInsertDTO insertDTO, Member member) {
		   Schedule schedule = CalInsertDTO.ofEntity(insertDTO);
		   Member insertMember = memberRepository.findByEmail(member.getEmail()).orElseThrow(
				   () -> new ResourceNotFoundException("Member", "Member Email", member.getEmail())
		   );
		   schedule.setMappingMember(insertMember);
		   Schedule insertCal = calRepository.save(schedule);	   
	       return ResCalInsertDTO.fromEntity(insertCal);
	   }
	   
	   public List<ResCalListDTO> list(Member member){	
		   List<Schedule> list = calRepository.findByMember_Id(member.getId());
		   List<ResCalListDTO> listToDo = new ArrayList<>();
		   for(Schedule schedule : list){
	            ResCalListDTO dto = ResCalListDTO.fromEntity(schedule);
	            listToDo.add(dto); 
	        }
		   return listToDo;
	   }
	       
}
