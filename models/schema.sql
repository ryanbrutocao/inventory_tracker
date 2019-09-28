DROP DATABASE IF EXISTS main_wine;
CREATE DATABASE main_wine;
USE main_wine;
CREATE TABLE main_inventory
(
	id int NOT NULL AUTO_INCREMENT,
customer_name varchar(255) NOT NULL,
varietal varchar(100) NOT NULL,
actual_ordered varchar(255) NOT NULL,
promised varchar(100) NOT NULL,
box_1_promised integer(10) NOT NULL,
box_2_promised integer(10) NOT NULL,
box_3_promised integer(10) NOT NULL,
box_1_actual integer(10) NOT NULL,
box_2_actual integer(10) NOT NULL,
box_3_actual integer(10) NOT NULL,
label_count integer(10) NOT NULL,
date_ordered datetime NOT NULL,
notes varchar(1000) NOT NULL,
	PRIMARY KEY (id)
);
INSERT INTO main_inventory (customer_name, varietal, actual_ordered, promised, box_1_promised, box_2_promised, box_3_promised, box_1_actual, box_2_actual, box_3_actual, label_count, date_ordered, notes) VALUES ('Melissa', 'Pinot Noir', '100', '300', '30', '30', '30', '20', '20', '20', '400', '01/10/19', 'these are my notes' );

