package com.example.demo;
//./gradlew bootRun

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.ArrayList;
@CrossOrigin(origins="*")
@RestController
public class Controller {

    private final MemberRepository memberRepository;
    private final AdditionalDutyRepository additionalDutyRepository;
    public Controller(MemberRepository memberRepository, AdditionalDutyRepository additionalDutyRepository) {
        this.memberRepository = memberRepository;
        this.additionalDutyRepository = additionalDutyRepository;
    }

    @GetMapping("/ping")
    public String ping() {
        return "pong";
    }

    @GetMapping("/members")
    public Iterable<Member> members() {
        Iterable<Member> output = this.memberRepository.findAll();
        return output;
    }

    @GetMapping("/members/{member_id}")
    public String member(@PathVariable Long member_id) {
        Member member =this.memberRepository.findById(member_id).get();
        return member.toString();
    }

    @GetMapping("/duties")
    public Iterable<AdditionalDuty> duties() {
        Iterable<AdditionalDuty> output = this.additionalDutyRepository.findAll();
        return output;
    }

    @GetMapping("/duties/{duty_id}")
    public AdditionalDuty duty(@PathVariable Long duty_id) {
        AdditionalDuty additionalDuty = this.additionalDutyRepository.findById(duty_id).get();
        return additionalDuty;
    }

//    main page mapping


//    Additional_Duty_Tracker mapping


//    Inbound_Outbound_Tracker mapping


//    OPR_EPR_Tracker mapping
    @PatchMapping("members/{member_id}")
    public Member updateStatus(@RequestBody String Body, @PathVariable Long member_id){
        Member member = this.memberRepository.findById(member_id).get();
        member.setOpr_epr_status(Body);
        return this.memberRepository.save(member);
    }

}
