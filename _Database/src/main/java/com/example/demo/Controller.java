package com.example.demo;
//./gradlew bootRun
//docker-compose up
//docker-compose down -v

import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin
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

    @PostMapping("/members/add-member")
    public Member addMember (@RequestBody Member member) {
        this.memberRepository.save(member);
        return member;
    }

//    main page mapping


//    Additional_Duty_Tracker mapping
    @GetMapping("/duties")
    public Iterable<AdditionalDuty> duties() {
        Iterable<AdditionalDuty> output = this.additionalDutyRepository.findAll();
        return output;
    }

    @GetMapping("/duties/details")
    public Iterable<Map> dutiesDetails() {
        Iterable<Map> output = this.additionalDutyRepository.findAllDetails();
        return output;
    }

    @GetMapping("/duties/{duty_id}")
    public AdditionalDuty duty(@PathVariable Long duty_id) {
        AdditionalDuty additionalDuty = this.additionalDutyRepository.findById(duty_id).get();
        return additionalDuty;
    }

    @GetMapping("/duties/unassigned")
    public Iterable<AdditionalDuty> unassignedDuties() {
        Iterable<AdditionalDuty> output = this.additionalDutyRepository.findUnassigned();
        return output;
    }

    @DeleteMapping("/duties/{duty_id}")
    public String deleteDuty(@PathVariable Long duty_id) {
        this.additionalDutyRepository.deleteById(duty_id);
        return "Deleted additional duty";
    }

    @PostMapping("/duties")
    public AdditionalDuty create(@RequestBody AdditionalDuty additionalDuty) {
        return this.additionalDutyRepository.save(additionalDuty);
    }

    //    @PatchMapping("/duties/{duty_id}")
//    public AdditionalDuty editDuty(@RequestBody AdditionalDuty input, @PathVariable Long duty_id) {
//        AdditionalDuty editThis = this.additionalDutyRepository.findById(duty_id).get();
//        editThis.setDuty_id(input.getDuty_id());
//        editThis.setTitle(input.getTitle());
//        editThis.setMember_id(input.getMember_id());
//        editThis.setWorkload(input.getWorkload());
//        return this.additionalDutyRepository.save(editThis);
//    }


//    Inbound_Outbound_Tracker mapping


//    OPR_EPR_Tracker mapping


}
