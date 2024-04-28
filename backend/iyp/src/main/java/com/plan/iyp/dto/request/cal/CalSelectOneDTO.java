package com.plan.iyp.dto.request.cal;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CalSelectOneDTO {
	
    private Long sidx;
    

    @Builder
    public CalSelectOneDTO(Long sidx) {
        this.sidx = sidx;
    }

}