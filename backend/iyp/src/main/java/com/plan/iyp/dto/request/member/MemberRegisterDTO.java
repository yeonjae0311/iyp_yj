package com.plan.iyp.dto.request.member;

import com.plan.iyp.common.Role;
import com.plan.iyp.entity.Member;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class MemberRegisterDTO {

	private String id;
    private String email;
    private String password;
    private String passwordCheck;
    private String name;

    @Builder
    public MemberRegisterDTO(String id, String email, String password, String passwordCheck, String name) {
    	this.id = id;
        this.email = email;
        this.password = password;
        this.passwordCheck = passwordCheck;
        this.name = name;
    }

    // DTO -> Entity
    public static Member ofEntity(MemberRegisterDTO dto) {
        return Member.builder()
        		.id(dto.getId())
                .email(dto.getEmail())
                .password(dto.getPassword())
                .name(dto.getName())
                .roles(Role.USER)
                .build();
    }
}