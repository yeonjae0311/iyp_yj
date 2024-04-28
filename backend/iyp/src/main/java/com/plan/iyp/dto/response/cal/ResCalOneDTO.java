package com.plan.iyp.dto.response.cal;

import com.plan.iyp.entity.Schedule;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ResCalOneDTO {

    private Long scheId;
    private String sTitle;
    private String sContent;
    private String sDate;
    private String sColor;

    @Builder
    public ResCalOneDTO(Long scheId, String sTitle, String sContent, String sDate, String sColor) {
        this.scheId = scheId;
        this.sTitle = sTitle;
        this.sContent = sContent;
        this.sDate = sDate;
        this.sColor = sColor;
    }

    public static ResCalOneDTO fromEntity(Schedule schedule) {
        return ResCalOneDTO.builder()
                .scheId(schedule.getSIdx())
                .sTitle(schedule.getSTitle())
                .sContent(schedule.getSContent())
                .sDate(schedule.getSDate())
                .sColor(schedule.getSColor())
                .build();
    }
    
}
