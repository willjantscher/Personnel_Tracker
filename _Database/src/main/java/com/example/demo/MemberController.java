package com.example.demo;
//./gradlew bootRun

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class MemberController {

    private final MemberRepository repository;
    public MemberController(MemberRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/ping")
    public String ping() {
        return "pong";
    }

    @GetMapping("/members")
    public Iterable<Member> members() {
        Iterable<Member> output = this.repository.findAll();
        return output;
    }

    @GetMapping("/members/{member_id}")
    public String member(@PathVariable long member_id) {
        Member member =this.repository.findById(member_id).get();
        return member.toString();
    }

//    main page mapping

//    Additional_Duty_Tracker mapping

//    Inbound_Outbound_Tracker mapping

//    OPR_EPR_Tracker mapping

}
