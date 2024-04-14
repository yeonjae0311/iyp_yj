package com.plan.iyp.dto.response.member;

import org.springframework.security.core.userdetails.UserDetails;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class MemberTokenDTO {
    private String email;
    private String token;

    @Builder
    public MemberTokenDTO(String email, String token) {
        this.email = email;
        this.token = token;
    }

    // Entity -> DTO
    public static MemberTokenDTO fromEntity(UserDetails member, String token) {
        return MemberTokenDTO.builder()
                .email(member.getUsername())
                .token(token)
                .build();
    }
}