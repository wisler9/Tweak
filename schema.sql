DROP DATABASE IF EXISTS tweak_DB;
CREATE DATABASE tweak_DB;
USE tweak_DB;

CREATE TABLE users(
    id INT(11) AUTO_INCREMENT NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(60) NOT NULL,
    bio varchar(200),
    experience varchar(250),
    PRIMARY KEY (id),
);



SELECT * FROM users;