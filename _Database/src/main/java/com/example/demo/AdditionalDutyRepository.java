package com.example.demo;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Map;
import java.util.Set;

public interface AdditionalDutyRepository extends CrudRepository<AdditionalDuty, Long > {

    @Query(value = "SELECT A.paygrade, A.first_name, A.last_name, B.duty_id, B.title, B.workload " +
            "FROM Members A RIGHT JOIN Additional_Duties B " +
            "ON A.member_id = B.member_id", nativeQuery = true)
    Iterable<Map> findAllDetails();

    @Query(value = "SELECT * FROM Additional_Duties WHERE member_id IS NULL", nativeQuery = true)
    Iterable<AdditionalDuty> findUnassigned();
}
