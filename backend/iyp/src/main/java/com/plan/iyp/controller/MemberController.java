package com.plan.iyp.controller;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.plan.iyp.dto.request.member.MemberLoginDTO;
import com.plan.iyp.dto.request.member.MemberRegisterDTO;
import com.plan.iyp.dto.request.member.MemberUpdateDTO;
import com.plan.iyp.dto.response.member.MemberResponseDTO;
import com.plan.iyp.dto.response.member.MemberTokenDTO;
import com.plan.iyp.entity.Member;
import com.plan.iyp.service.MemberService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/member")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @GetMapping("/checkId")
    public ResponseEntity<?> checkIdDuplicate(@RequestParam String id) {
        memberService.checkIdDuplicate(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PostMapping("/register")
    public ResponseEntity<MemberResponseDTO> register(@RequestBody MemberRegisterDTO memberRegisterDTO) {
        MemberResponseDTO successMember = memberService.register(memberRegisterDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(successMember);
    }

    @PostMapping("/login")
    public ResponseEntity<MemberTokenDTO> login(@RequestBody MemberLoginDTO memberLoginDTO) {
        MemberTokenDTO loginDTO = memberService.login(memberLoginDTO);
        return ResponseEntity.status(HttpStatus.OK).header(loginDTO.getToken()).body(loginDTO);
    }

    @PostMapping("/checkPwd")
    public ResponseEntity<MemberResponseDTO> check(
            @AuthenticationPrincipal Member member,
            @RequestBody Map<String, String> request) {
        String password = request.get("password");
        MemberResponseDTO memberInfo = memberService.check(member, password);
        return ResponseEntity.status(HttpStatus.OK).body(memberInfo);
    }

    @PutMapping("/update")
    public ResponseEntity<MemberResponseDTO> update(
            @AuthenticationPrincipal Member member,
            @RequestBody MemberUpdateDTO memberUpdateDTO) {
        MemberResponseDTO memberUpdate = memberService.update(member, memberUpdateDTO);
        return ResponseEntity.status(HttpStatus.OK).body(memberUpdate);
    }
    
    @PostMapping("/profile")
    public ResponseEntity<MemberResponseDTO> profile(
            @AuthenticationPrincipal Member member) {
       MemberResponseDTO memberProfile = memberService.profile(member);
       System.out.println(memberProfile.getName());
        return ResponseEntity.status(HttpStatus.OK).body(memberProfile);
    }
}