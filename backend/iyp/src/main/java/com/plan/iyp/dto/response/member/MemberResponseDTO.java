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

    private String id;
    private String name;

    @Builder
    public MemberResponseDTO(String id, String name) {
        this.id = id;
        this.name = name;
    }

    // Entity -> DTO
    public static MemberResponseDTO fromEntity(Member member) {
        return MemberResponseDTO.builder()
                .id(member.getId())
                .name(member.getName())
                .build();
    }
}