DROP DATABASE IF EXISTS main_wine;
CREATE DATABASE main_wine;
USE main_wine;
CREATE TABLE main_inventory
(
id int NOT NULL AUTO_INCREMENT,
wine  VARCHAR(100) NOT NULL,
actualInventory INTEGER(5) NOT NULL,
shadowInventory INTEGER(5) NOT NULL,
boxType INTEGER(2) NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO main_inventory (wine, actualInventory, shadowInventory, boxType) VALUES ("2017 Chardonnay", 500, 500, 1);
INSERT INTO main_inventory (wine, actualInventory, shadowInventory, boxType) VALUES ("2017 Pinot Noir", 300, 300, 1);
INSERT INTO main_inventory (wine, actualInventory, shadowInventory, boxType) VALUES ("2017 Sauvignon Blanc", 500, 500, 2);
INSERT INTO main_inventory (wine, actualInventory, shadowInventory, boxType) VALUES ("2018 Chardonnay", 500, 500, 1);
INSERT INTO main_inventory (wine, actualInventory, shadowInventory, boxType) VALUES ("2018 Pinot Noir", 400, 400, 1);
INSERT INTO main_inventory (wine, actualInventory, shadowInventory, boxType) VALUES ("2018 Sauvignon Blanc", 500, 500, 2);
INSERT INTO main_inventory (wine, actualInventory, shadowInventory, boxType) VALUES ("2019 Chardonnay", 500, 500, 1);

CREATE TABLE customerInfo (
clientName VARCHAR(100) NOT NULL,
primaryContact VARCHAR(100) NOT NULL,
phone VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
streetAddress VARCHAR(100) NOT NULL,
city VARCHAR(100) NOT NULL,
state VARCHAR(2) NOT NULL,
zipcode VARCHAR(5) NOT NULL

);

INSERT INTO customerInfo (clientName, primaryContact, phone, email, streetAddress, city, state, zipcode) VALUES ("Melissa", "Melissa", "123-456-7890","melissa@winecompany.com", "123 Main St", "New York City", "NY", "01234");
INSERT INTO customerInfo (clientName, primaryContact, phone, email, streetAddress, city, state, zipcode) VALUES ("Jared", "Jared", "234-456-7890","jared@winecompany.com", "123 Main St", "San Francisco", "CA", "23456");
INSERT INTO customerInfo (clientName, primaryContact, phone, email, streetAddress, city, state, zipcode) VALUES ("Steven", "Steven", "345-456-7890", "steven@winecompany.com", "123 Main St", "Charlotte", "NC", "34567");

SELECT * FROM customerInfo;
SELECT * FROM main_inventory;


-- varietal varchar(100) NOT NULL,
-- actual_ordered varchar(255) NOT NULL,
-- promised varchar(100) NOT NULL,
-- box_1_promised integer(10) NOT NULL,
-- box_2_promised integer(10) NOT NULL,
-- box_3_promised integer(10) NOT NULL,
-- box_1_actual integer(10) NOT NULL,
-- box_2_actual integer(10) NOT NULL,
-- box_3_actual integer(10) NOT NULL,
-- label_count integer(10) NOT NULL,
-- date_ordered datetime NOT NULL,
-- notes varchar(1000) NOT NULL,
--     PRIMARY KEY (id)
-- );
-- INSERT INTO main_inventory (customer_name, varietal, actual_ordered, promised, box_1_promised, box_2_promised, box_3_promised, box_1_actual, box_2_actual, box_3_actual, label_count, date_ordered, notes) VALUES ('Melissa', 'Pinot Noir', '100', '300', '30', '30', '30', '20', '20', '20', '400', '01/10/19', 'these are my notes' );
