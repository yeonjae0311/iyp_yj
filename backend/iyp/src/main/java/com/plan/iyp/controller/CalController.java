package com.plan.iyp.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.plan.iyp.dto.request.cal.CalInsertDTO;
import com.plan.iyp.dto.request.cal.CalSelectOneDTO;
import com.plan.iyp.dto.request.cal.CalUpdateDTO;
import com.plan.iyp.dto.response.cal.ResCalInsertDTO;
import com.plan.iyp.dto.response.cal.ResCalListDTO;
import com.plan.iyp.dto.response.cal.ResCalOneDTO;
import com.plan.iyp.entity.Member;
import com.plan.iyp.entity.Schedule;
import com.plan.iyp.service.CalService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/cal")
@RequiredArgsConstructor
@Slf4j
public class CalController {
	
	 private final CalService calService;
	
	@GetMapping("/todo")
	public List<ResCalListDTO> todoList(@AuthenticationPrincipal Member member) {
		List<ResCalListDTO> listToDo = calService.list(member);
		return listToDo;
	}
	
	@PostMapping("/insert")
	public ResponseEntity<ResCalInsertDTO> insert(
			@RequestBody CalInsertDTO insertDTO, @AuthenticationPrincipal Member member) {
		 	Thread currentThread = Thread.currentThread();
	        log.info("현재 실행 중인 스레드: " + currentThread.getName());
	        ResCalInsertDTO saveCalDTO = calService.insert(insertDTO, member);
		return ResponseEntity.status(HttpStatus.CREATED).body(saveCalDTO);
	}
	
	@PostMapping("/select")
	public ResCalOneDTO select(@RequestBody CalSelectOneDTO selectOneDTO, @AuthenticationPrincipal Member member) {
		ResCalOneDTO toDoOne = calService.one(member, selectOneDTO.getSidx());
		return toDoOne;
	}
	
	@PatchMapping("/update")
	public ResponseEntity<ResCalInsertDTO> update(
			@RequestBody CalUpdateDTO updateDTO, @AuthenticationPrincipal Member member){
		Schedule sche = calService.update(updateDTO);
		ResCalInsertDTO resDTO = ResCalInsertDTO.fromEntity(sche);
		return ResponseEntity.status(HttpStatus.OK).body(resDTO);
	}
	
	@DeleteMapping("/delete")
	public ResponseEntity<Long> delete (@RequestBody CalSelectOneDTO oneDTO){
		System.out.println(oneDTO.getSidx());
		calService.delete(oneDTO.getSidx());
		return ResponseEntity.status(HttpStatus.OK).build();
	}
}
