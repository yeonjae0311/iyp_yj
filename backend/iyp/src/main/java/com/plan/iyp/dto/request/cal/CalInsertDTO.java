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
	
    private String sDate;
    private String sTitle;
    private String sContent;
    private String sColor;

    @Builder
    public CalInsertDTO(String sDate, String sTitle, String sContent, String sColor) {
        this.sDate = sDate;
        this.sTitle = sTitle;
        this.sContent = sContent;
        this.sColor = sColor;
    }

    // DTO -> Entity
    public static Schedule ofEntity(CalInsertDTO dto) {
        return Schedule.builder()
                .sDate(dto.getSDate())
                .sTitle(dto.getSTitle())
                .sContent(dto.getSContent())
                .sColor(dto.getSColor())
                .build();
    }
}
