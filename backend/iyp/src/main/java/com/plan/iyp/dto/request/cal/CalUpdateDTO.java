package com.plan.iyp.dto.request.cal;

import com.plan.iyp.entity.Schedule;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CalUpdateDTO {
	
	private Long sidx;
    private String sDate;
    private String sTitle;
    private String sContent;
    private String sColor;

    @Builder
    public CalUpdateDTO(Long sidx, String sDate, String sTitle, String sContent, String sColor) {
    	this.sidx = sidx;
        this.sDate = sDate;
        this.sTitle = sTitle;
        this.sContent = sContent;
        this.sColor = sColor;
    }

    // DTO -> Entity
    public static Schedule ofEntity(CalUpdateDTO dto) {
        return Schedule.builder()
        		.sIdx(dto.getSidx())
                .sDate(dto.getSDate())
                .sTitle(dto.getSTitle())
                .sContent(dto.getSContent())
                .sColor(dto.getSColor())
                .build();
    }
}
