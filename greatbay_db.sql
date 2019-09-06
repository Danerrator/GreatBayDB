DROP DATABASE IF EXISTS great_bay_db;
CREATE DATABASE great_bay_db;
USE great_bay_db;
CREATE TABLE auction (
    id INT NOT NULL AUTO_INCREMENT,
    item_name VARCHAR(50),
    category VARCHAR(50),
    starting_bid INT(11),
    highest_bid INT(11),
    PRIMARY KEY (id)
);