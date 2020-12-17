package com.example.demo;

import javax.persistence.*;

@Entity
@Table(name = "Additional_Duties")
public class AdditionalDuty {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long duty_id;
    private String title;
    private Long member_id;
    private Integer workload;

    public Long getDuty_id() {
        return duty_id;
    }

    public void setDuty_id(Long duty_id) {
        this.duty_id = duty_id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Long getMember_id() {
        return member_id;
    }

    public void setMember_id(Long member_id) {
        this.member_id = member_id;
    }

    public Integer getWorkload() {
        return workload;
    }

    public void setWorkload(Integer workload) {
        this.workload = workload;
    }

    @Override
    public String toString() {
        return "AdditionalDuty{" +
                "duty_id=" + duty_id +
                ", title='" + title + '\'' +
                ", member_id=" + member_id +
                ", workload=" + workload +
                '}';
    }
}
