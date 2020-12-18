package com.example.demo;
//./gradlew bootRun
//docker-compose up
//docker-compose down -v

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;


import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins="*")
@RestController
public class AdditionalDutyController {

    private final AdditionalDutyRepository additionalDutyRepository;
    public AdditionalDutyController(AdditionalDutyRepository additionalDutyRepository) {
        this.additionalDutyRepository = additionalDutyRepository;
    }

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

    //    @PatchMapping("/duties/{duty_id}")
//    public AdditionalDuty editDuty(@RequestBody AdditionalDuty input, @PathVariable Long duty_id) {
//        AdditionalDuty editThis = this.additionalDutyRepository.findById(duty_id).get();
//        editThis.setDuty_id(input.getDuty_id());
//        editThis.setTitle(input.getTitle());
//        editThis.setMember_id(input.getMember_id());
//        editThis.setWorkload(input.getWorkload());
//        return this.additionalDutyRepository.save(editThis);
//    }

}
