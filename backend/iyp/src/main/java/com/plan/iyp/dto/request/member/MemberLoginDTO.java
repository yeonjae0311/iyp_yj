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

    private String id;
    private String password;

    @Builder
    public MemberLoginDTO(String id, String password) {
        this.id = id;
        this.password = password;
    }
}