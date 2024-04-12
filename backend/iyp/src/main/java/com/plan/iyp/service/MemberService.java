package com.plan.iyp.service;

import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.plan.iyp.common.exception.MemberException;
import com.plan.iyp.common.exception.ResourceNotFoundException;
import com.plan.iyp.dto.request.member.MemberLoginDTO;
import com.plan.iyp.dto.request.member.MemberRegisterDTO;
import com.plan.iyp.dto.request.member.MemberUpdateDTO;
import com.plan.iyp.dto.response.member.MemberResponseDTO;
import com.plan.iyp.dto.response.member.MemberTokenDTO;
import com.plan.iyp.entity.Member;
import com.plan.iyp.repository.MemberRepository;
import com.plan.iyp.security.jwt.CustomUserDetailsService;
import com.plan.iyp.security.jwt.JwtTokenUtil;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class MemberService {

    private final PasswordEncoder encoder;
    private final MemberRepository memberRepository;

    private final AuthenticationManager authenticationManager;
    private final CustomUserDetailsService userDetailsService;
    private final JwtTokenUtil jwtTokenUtil;

    public HttpStatus checkIdDuplicate(String Id) {
        isExistUserId(Id);
        return HttpStatus.OK;
    }

    public MemberResponseDTO register(MemberRegisterDTO registerDTO) {
        isExistUserId(registerDTO.getId());
        checkPassword(registerDTO.getPassword(), registerDTO.getPasswordCheck());

        // 패스워드 암호화
        String encodePwd = encoder.encode(registerDTO.getPassword());
        registerDTO.setPassword(encodePwd);

        Member saveMember = memberRepository.save(
                MemberRegisterDTO.ofEntity(registerDTO));

        return MemberResponseDTO.fromEntity(saveMember);
    }
    
    public MemberResponseDTO profile(Member member) {
    	Member profileMember =  memberRepository.findById(member.getId()).orElseThrow(
                () -> new ResourceNotFoundException("Member", "Member Id", member.getId())
        );
    	return MemberResponseDTO.fromEntity(profileMember);
    }


    public MemberTokenDTO login(MemberLoginDTO loginDTO) {
        authenticate(loginDTO.getId(), loginDTO.getPassword());
        UserDetails userDetails = userDetailsService.loadUserByUsername(loginDTO.getId());
        checkEncodePassword(loginDTO.getPassword(), userDetails.getPassword());
        String token = jwtTokenUtil.generateToken(userDetails);
        return MemberTokenDTO.fromEntity(userDetails, token);
    }

    public MemberResponseDTO check(Member member, String password) {
        Member checkMember = (Member) userDetailsService.loadUserByUsername(member.getId());
        checkEncodePassword(password, checkMember.getPassword());
        return MemberResponseDTO.fromEntity(checkMember);
    }

    public MemberResponseDTO update(Member member, MemberUpdateDTO updateDTO) {
        checkPassword(updateDTO.getPassword(), updateDTO.getPasswordCheck());
        String encodePwd = encoder.encode(updateDTO.getPassword());
        Member updateMember =  memberRepository.findById(member.getId()).orElseThrow(
                () -> new ResourceNotFoundException("Member", "Member Id", member.getId())
        );
        updateMember.update(encodePwd, updateDTO.getName());
        return MemberResponseDTO.fromEntity(updateMember);
    }

    /**
     * 사용자 인증
     * @param id
     * @param pwd
     */
    private void authenticate(String id, String pwd) {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(id, pwd));
        } catch (DisabledException e) {
            throw new MemberException("인증되지 않은 아이디입니다.", HttpStatus.BAD_REQUEST);
        } catch (BadCredentialsException e) {
            throw new MemberException("비밀번호가 일치하지 않습니다.", HttpStatus.BAD_REQUEST);
        }
    }

    /**
     * 아이디(이메일) 중복 체크
     * @param email
     */
    private void isExistUserId(String id) {
        if (memberRepository.findById(id).isPresent()) {
            throw new MemberException("이미 사용 중인 아이디입니다.", HttpStatus.BAD_REQUEST);
        }
    }

    /**
     * 비밀번호와 비밀번호 확인이 같은지 체크
     * @param password
     * @param passwordCheck
     */
    private void checkPassword(String password, String passwordCheck) {
        if (!password.equals(passwordCheck)) {
            throw new MemberException("패스워드 불일치", HttpStatus.BAD_REQUEST);
        }
    }

    /**
     * 사용자가 입력한 비번과 DB에 저장된 비번이 같은지 체크 : 인코딩 확인
     * @param rawPassword
     * @param encodedPassword
     */
    private void checkEncodePassword(String rawPassword, String encodedPassword) {
        if (!encoder.matches(rawPassword, encodedPassword)) {
            throw new MemberException("패스워드 불일치", HttpStatus.BAD_REQUEST);
        }
    }
}