package com.plan.iyp.dto.request.cal;

import com.plan.iyp.entity.Schedule;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CalInsertDTO {
	
    private String s_date;
    private String s_title;
    private String s_content;
    private String s_color;

    @Builder
    public CalInsertDTO(String s_date, String s_title, String s_content, String s_color) {
        this.s_date = s_date;
        this.s_title = s_title;
        this.s_content = s_content;
        this.s_color = s_color;
    }

    // DTO -> Entity
    public static Schedule ofEntity(CalInsertDTO dto) {
        return Schedule.builder()
                .s_date(dto.getS_date())
                .s_title(dto.getS_title())
                .s_content(dto.getS_content())
                .s_color(dto.getS_color())
                .build();
    }
}
