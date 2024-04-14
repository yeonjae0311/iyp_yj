package com.plan.iyp.dto.response.member;

import com.plan.iyp.entity.Member;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class MemberResponseDTO {

    private String email;
    private String name;

    @Builder
    public MemberResponseDTO(String email, String name) {
        this.email= email;
        this.name = name;
    }

    // Entity -> DTO
    public static MemberResponseDTO fromEntity(Member member) {
        return MemberResponseDTO.builder()
                .email(member.getEmail())
                .name(member.getName())
                .build();
    }
}