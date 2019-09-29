INSERT INTO mainInventory (wine, actualInventory, shadowInventory, boxType) 
VALUES 
	("2017 Chardonnay", 500, 500, 1),
	("2017 Pinot Noir", 300, 300, 1),
	("2017 Sauvignon Blanc", 500, 500, 2),
	("2018 Chardonnay", 500, 500, 1),
	("2018 Pinot Noir", 400, 400, 1),
	("2018 Sauvignon Blanc", 500, 500, 2),
	("2019 Chardonnay", 500, 500, 1);



INSERT INTO customerInfo (clientName, primaryContact, phone, email, streetAddress, city, ST, zipcode) 
VALUES 
	("Melissa", "Melissa", "123-456-7890","melissa@winecompany.com", "123 Main St", "New York City", "NY", "01234"),
	("Jared", "Jared", "234-456-7890","jared@winecompany.com", "123 Main St", "San Francisco", "CA", "23456"),
	("Steven", "Steven", "345-456-7890", "steven@winecompany.com", "123 Main St", "Charlotte", "NC", "34567");


INSERT INTO orders (accountName, wine, actualOrdered, promised, boxTypeOne, boxTypeTwo, boxTypeThree, labelsLeft, notes)
VALUES
	("Jones", "2016 Chardonnay", 0, 100, 0, 100, 0, 100, "test"),
	("Mack", "2017 Pinot Noir", 0, 200, 200, 0, 0, 200, "test"),
	("Smith", "2018 Sauvignon Blanc", 0, 0, 0, 0, 0, 300, "test");
	

SELECT * FROM customerInfo;
SELECT * FROM mainInventory;
SELECT * FROM orders;

