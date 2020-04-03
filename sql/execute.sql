create database student;
use student;


create table students(
	StudentId int not null primary key,
    StudentName varchar(200) not null,
    University varchar(100) not null,
    Course varchar(5) not null,
    Fees int not null
);

select * from students;


