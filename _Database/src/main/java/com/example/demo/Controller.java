package com.example.demo;
//./gradlew bootRun

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

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
    @CrossOrigin(origins = "http://localhost:8080")
    @DeleteMapping("/duties/{duty_id}")
    public String deleteDuty(@PathVariable Long duty_id) {
        this.additionalDutyRepository.deleteById(duty_id);
        return "Deleted additional duty";
    }

    @PatchMapping("/duties/{duty_id}")
    public AdditionalDuty editDuty(@RequestBody AdditionalDuty input, @PathVariable Long duty_id) {
        AdditionalDuty editThis = this.additionalDutyRepository.findById(duty_id).get();
        editThis.setDuty_id(input.getDuty_id());
        editThis.setTitle(input.getTitle());
        editThis.setMember_id(input.getMember_id());
        editThis.setWorkload(input.getWorkload());
        return this.additionalDutyRepository.save(editThis);
    }

    @GetMapping("/duties/unassigned")
    public Iterable<AdditionalDuty> unassignedDuties() {
        Iterable<AdditionalDuty> output = this.additionalDutyRepository.findUnassigned();
        return output;
    }

//    Inbound_Outbound_Tracker mapping


//    OPR_EPR_Tracker mapping


}
