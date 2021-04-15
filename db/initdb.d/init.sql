CREATE DATABASE sample_db;
USE sample_db;
 
CREATE TABLE users (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name TEXT NOT NULL,
mail TEXT NOT NULL

);
 
INSERT INTO users (name, mail) VALUES ("foo", "foo@mail.com"),("bar", "bar@mail.com");