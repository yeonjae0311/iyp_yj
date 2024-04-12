package com.plan.iyp.dto.request.member;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * -Request-
 * 회원 정보 변경 요청 dto
 */

@Getter
@Setter
@NoArgsConstructor
public class MemberUpdateDTO {

    private String password;
    private String passwordCheck;
    private String name;

    @Builder
    public MemberUpdateDTO(String password, String passwordCheck, String name) {
        this.password = password;
        this.passwordCheck = passwordCheck;
        this.name = name;
    }
}
