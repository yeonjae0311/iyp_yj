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
    @Column(name = "sidx")
    private Long sIdx;

    @Column(nullable = false)
    private String sDate;

    @Column(nullable = false)
    private String sTitle;
    
    @Column(nullable = false)
    private String sContent;

    @Column(nullable = false)
    private String sColor;
    
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id")
	private Member member;
    
    @Builder
    public Schedule(Long sIdx, String sTitle, String sDate, String sContent, String sColor, Member member) {
        this.sIdx= sIdx;
        this.sDate = sDate;
        this.sColor = sColor;
        this.sTitle = sTitle;
        this.sContent = sContent;
        this.member = member;
    }
    
    public void update(String sTitle, String sContent, String sColor) {
        this.sTitle = sTitle;
        this.sContent = sContent;
        this.sColor = sColor;
    }
    
    public void setMappingMember(Member member) {
        this.member = member;
        member.getSchedules().add(this);
    }
}
