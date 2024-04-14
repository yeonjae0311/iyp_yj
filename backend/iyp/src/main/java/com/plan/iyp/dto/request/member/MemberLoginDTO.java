package com.plan.iyp.dto.request.member;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * -Request-
 * 로그인 요청 dto
 */
@Getter
@Setter
@NoArgsConstructor
public class MemberLoginDTO {

    private String email;
    private String password;

    @Builder
    public MemberLoginDTO(String email, String password) {
        this.email = email;
        this.password = password;
    }
}