CREATE TABLE Members (
    `member_id` INTEGER NOT NULL AUTO_INCREMENT,
    `paygrade` VARCHAR(255),
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `birthday` DATE,
    `arrival_date` DATE,
    `departure_date` DATE,
    `has_assignment` INTEGER NOT NULL,
    `opr_epr_status` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`member_id`)
);

INSERT INTO Members (paygrade, first_name, last_name, birthday, arrival_date, has_assignment, opr_epr_status) VALUES ("E1", "Bobby", "Bobbyson", "2002-05-07", "2002-10-02", 1, "Complete");
INSERT INTO Members (paygrade, first_name, last_name, birthday, has_assignment, opr_epr_status) VALUES ("E5", "Jane", "Doe", "2002-02-07", 0, "Created");
INSERT INTO Members (paygrade, first_name, last_name, birthday, has_assignment, opr_epr_status) VALUES ("E9", "Judean", "Johnson", "1678-12-07", 0, "Routed");
INSERT INTO Members (paygrade, first_name, last_name, birthday, has_assignment, opr_epr_status) VALUES ("O1", "Jacob", "Smith", "2002-05-07", 0, "Not Due");
INSERT INTO Members (paygrade, first_name, last_name, birthday, departure_date, has_assignment, opr_epr_status) VALUES ("E5", "Emily", "Thomas", "2002-02-07", "2002-02-07", 1, "Not Due");
INSERT INTO Members (paygrade, first_name, last_name, birthday, has_assignment, opr_epr_status) VALUES ("O4", "Aria", "Pybus", "1998-02-07", 0, "Not Due");
INSERT INTO Members (paygrade, first_name, last_name, birthday, has_assignment, opr_epr_status) VALUES ("O1", "Caden", "Dominguez", "1984-02-07", 0, "Not Due");
INSERT INTO Members (paygrade, first_name, last_name, birthday, has_assignment, opr_epr_status) VALUES ("O3", "Rupert", "Robinson", "2002-08-12", 0, "Not Due");
INSERT INTO Members (paygrade, first_name, last_name, birthday, departure_date, has_assignment, opr_epr_status) VALUES ("E2", "Harry", "Houdini", "2002-02-07", "2002-02-17", 1, "Not Due");
INSERT INTO Members (paygrade, first_name, last_name, birthday, has_assignment, opr_epr_status) VALUES ("E2", "Steve", "Sanchez", "2002-02-07", 0, "Not Due");
INSERT INTO Members (paygrade, first_name, last_name, birthday, has_assignment, opr_epr_status) VALUES ("E4", "Amy", "Bobbyson", "2002-02-07", 0, "Created");
INSERT INTO Members (paygrade, first_name, last_name, birthday, arrival_date, has_assignment, opr_epr_status) VALUES ("E5", "Remus", "Wolf", "2002-02-07", "2002-02-07", 1, "Not Due");
INSERT INTO Members (paygrade, first_name, last_name, birthday, departure_date, has_assignment, opr_epr_status) VALUES ("E7", "Scrooge", "Man", "2002-02-07", "2020-12-24", 1, "Not Due");
INSERT INTO Members (paygrade, first_name, last_name, birthday, arrival_date, has_assignment, opr_epr_status) VALUES ("O5", "Santa", "Clause", "2002-02-07", "2020-12-25", 1, "Not Due");
INSERT INTO Members (paygrade, first_name, last_name, birthday, has_assignment, opr_epr_status) VALUES ("O2", "Karl", "Ruby", "2002-02-07", 0, "Not Due");
INSERT INTO Members (paygrade, first_name, last_name, birthday, has_assignment, opr_epr_status) VALUES ("O1", "Stephany", "Hammersmith", "2002-02-07", 0, "Routed");
INSERT INTO Members (paygrade, first_name, last_name, birthday, departure_date, has_assignment, opr_epr_status) VALUES ("E5", "Bill", "Halfson", "2002-02-07", "2021-01-31", 1, "Not Due");
INSERT INTO Members (paygrade, first_name, last_name, birthday, arrival_date, has_assignment, opr_epr_status) VALUES ("E3", "Derp", "Derpson", "2002-02-07", "2021-02-14", 1, "Complete");


CREATE TABLE Additional_Duties (
    duty_id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    member_id INTEGER,
    FOREIGN KEY (member_id) REFERENCES Members(member_id),
    workload INTEGER,
    PRIMARY KEY (duty_id)
);

INSERT INTO Additional_Duties (title, member_id, workload) VALUES ("Secretary", 3, 9);
INSERT INTO Additional_Duties (title, member_id, workload) VALUES ("Voting Rep", 3, 2);
INSERT INTO Additional_Duties (title, member_id, workload) VALUES ("Security Manager", 1, 10);
INSERT INTO Additional_Duties (title, member_id, workload) VALUES ("COR", 8, 4);
INSERT INTO Additional_Duties (title, member_id, workload) VALUES ("Booster President", 1, 18);
INSERT INTO Additional_Duties (title, workload) VALUES ("Exec", 10);
INSERT INTO Additional_Duties (title, member_id, workload) VALUES ("PT Guy", 7, 4);
INSERT INTO Additional_Duties (title, member_id, workload) VALUES ("Assistant Exec", 8, 7);
INSERT INTO Additional_Duties (title, member_id, workload) VALUES ("Force Protection Officer", 11, 3);
INSERT INTO Additional_Duties (title, member_id, workload) VALUES ("Armorer", 10, 7);
INSERT INTO Additional_Duties (title,workload) VALUES ("Equal Opportunity Advisor", 10);
INSERT INTO Additional_Duties (title, member_id, workload) VALUES ("Safety NCO and Officer", 1, 13);
INSERT INTO Additional_Duties (title, member_id, workload) VALUES ("Claims Officer", 1, 4);
INSERT INTO Additional_Duties (title, workload) VALUES ("Other Secretary", 7);
INSERT INTO Additional_Duties (title, workload) VALUES ("Assistant to the Regional Manager", 1);
INSERT INTO Additional_Duties (title, member_id, workload) VALUES ("Information Assurance Manager", 12, 6);
INSERT INTO Additional_Duties (title, member_id, workload) VALUES ("Budget Officer", 5, 9);
INSERT INTO Additional_Duties (title, member_id, workload) VALUES ("Snack-o", 1, 7);
INSERT INTO Additional_Duties (title,workload) VALUES ("Secretary 4", 8);
INSERT INTO Additional_Duties (title, workload) VALUES ("SARC", 10);




