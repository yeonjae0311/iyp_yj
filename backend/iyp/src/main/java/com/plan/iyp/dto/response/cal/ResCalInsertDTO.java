package com.plan.iyp.dto.response.cal;

import com.plan.iyp.entity.Schedule;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ResCalInsertDTO {

    private Long scheId;
    private String s_title;
    private String s_content;
    private String s_date;
    private String s_color;

    @Builder
    public ResCalInsertDTO(Long scheId, String s_title, String s_content, String s_date, String s_color) {
        this.scheId = scheId;
        this.s_title = s_title;
        this.s_content = s_content;
        this.s_date = s_date;
        this.s_color = s_color;
    }

    public static ResCalInsertDTO fromEntity(Schedule schedule) {
        return ResCalInsertDTO.builder()
                .scheId(schedule.getS_idx())
                .s_title(schedule.getS_title())
                .s_content(schedule.getS_content())
                .s_date(schedule.getS_date())
                .s_color(schedule.getS_color())
                .build();
    }
}