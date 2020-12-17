package com.example.demo;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface AdditionalDutyRepository extends CrudRepository<AdditionalDuty, Long > {
    @Query(value = "SELECT * FROM Additional_Duties WHERE member_id = null", nativeQuery = true)
    Iterable<AdditionalDuty> findUnassigned();
}
