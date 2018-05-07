drop database if exists burger_db;

create database burger_db;

use burger_db;

create table burger (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
)