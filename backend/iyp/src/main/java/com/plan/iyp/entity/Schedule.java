package com.plan.iyp.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Schedule{
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "s_idx")
    private Long s_idx;

    @Column(nullable = false)
    private String s_date;

    @Column(nullable = false)
    private String s_title;
    
    @Column(nullable = false)
    private String s_content;

    @Column(nullable = false)
    private String s_color;
    
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id")
	private Member member;
    
    @Builder
    public Schedule(Long s_idx, String s_title, String s_date, String s_content, String s_color, Member member) {
        this.s_idx= s_idx;
        this.s_date = s_date;
        this.s_color = s_color;
        this.s_title = s_title;
        this.s_content = s_content;
        this.member = member;
    }
    
    public void setMappingMember(Member member) {
        this.member = member;
        member.getSchedules().add(this);
    }
}
