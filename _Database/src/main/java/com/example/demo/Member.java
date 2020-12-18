package com.example.demo;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "Members")
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long member_id;

    private String first_name;
    private String last_name;
    private String paygrade;

    public String getPaygrade() {
        return paygrade;
    }

    public void setPaygrade(String paygrade) {
        this.paygrade = paygrade;
    }

    private Date birthday;
    private Date arrival_date;
    private Date departure_date;
    private int has_assignment;
    private String opr_epr_status;

    public Long getMember_id() {
        return member_id;
    }

    public void setMember_id(Long member_id) {
        this.member_id = member_id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public Date getArrival_date() {
        return arrival_date;
    }

    public void setArrival_date(Date arrival_date) {
        this.arrival_date = arrival_date;
    }

    public Date getDeparture_date() {
        return departure_date;
    }

    public void setDeparture_date(Date departure_date) {
        this.departure_date = departure_date;
    }

    public int getHas_assignment() {
        return has_assignment;
    }

    public void setHas_assignment(int has_assignment) {
        this.has_assignment = has_assignment;
    }

    public String getOpr_epr_status() {
        return opr_epr_status;
    }

    public void setOpr_epr_status(String opr_epr_status) {
        this.opr_epr_status = opr_epr_status;
    }

    @Override
    public String toString() {
        return "Member{" +
                "member_id=" + member_id +
                ", first_name='" + first_name + '\'' +
                ", last_name='" + last_name + '\'' +
                ", paygrade='" + paygrade + '\'' +
                ", birthday=" + birthday +
                ", arrival_date=" + arrival_date +
                ", departure_date=" + departure_date +
                ", has_assignment=" + has_assignment +
                ", opr_epr_status='" + opr_epr_status + '\'' +
                '}';
    }
}
