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
    private String id;
    private String token;

    @Builder
    public MemberTokenDTO(String id, String token) {
        this.id = id;
        this.token = token;
    }

    // Entity -> DTO
    public static MemberTokenDTO fromEntity(UserDetails member, String token) {
        return MemberTokenDTO.builder()
                .id(member.getUsername())
                .token(token)
                .build();
    }
}