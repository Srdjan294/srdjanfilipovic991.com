drop database if exists emailbase;
create database emailbase;
use emailbase;

create table email(
    IDEmail int not null primary key auto_increment,
    emailString varchar(100) not null
);