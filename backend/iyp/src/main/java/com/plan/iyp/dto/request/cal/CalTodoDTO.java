package com.plan.iyp.dto.request.cal;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CalTodoDTO {
	
    private String date;
    

    @Builder
    public CalTodoDTO(String date) {
        this.date = date;
    }

}
