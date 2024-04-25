package com.plan.iyp.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.plan.iyp.dto.request.cal.CalInsertDTO;
import com.plan.iyp.dto.response.cal.ResCalInsertDTO;
import com.plan.iyp.dto.response.cal.ResCalListDTO;
import com.plan.iyp.entity.Member;
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
	
}
