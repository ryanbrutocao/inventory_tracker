INSERT INTO mainInventory (item, actualInventory, shadowInventory, boxType) 
VALUES 
	("2017 Chardonnay", 500, 500, 1),
	("2017 Pinot Noir", 300, 300, 1),
	("2017 Sauvignon Blanc", 500, 500, 2),
	("2018 Chardonnay", 500, 500, 1),
	("2018 Pinot Noir", 400, 400, 1),
	("2018 Sauvignon Blanc", 500, 500, 2),
	("2019 Chardonnay", 500, 500, 1),
	("box 1", 3000, 0, 0),
	("box 2", 4000, 0, 0),
	("box 3", 5000, 0, 0);



INSERT INTO customerInfo (clientName, primaryContact, phone, email, streetAddress, city, ST, zipcode, notes) 
VALUES 
	("Melissa", "Melissa", "123-456-7890","melissa@winecompany.com", "123 Main St", "New York City", "NY", "01234", "notes test"),
	("Jared", "Jared", "234-456-7890","jared@winecompany.com", "123 Main St", "San Francisco", "CA", "23456", "notes test"),
	("Steven", "Steven", "345-456-7890", "steven@winecompany.com", "123 Main St", "Charlotte", "NC", "34567", "notes test");


INSERT INTO orders (accountName, wine, actualOrdered, promised, boxTypeOne, boxTypeTwo, boxTypeThree)
VALUES
	("Jones", "2016 Chardonnay", 0, 100, 0, 0, 0),
	("Mack", "2017 Pinot Noir", 0, 200, 0, 0, 0),
	("Smith", "2018 Sauvignon Blanc", 0, 0, 0, 0, 0),
	("Mack", "2017 Pinot Noir", 100, 0, 0, 100, 0);

INSERT INTO labels (accountName, wine, promised, labelsLeft)
VALUES
	("Mack", "2017 Pinot Noir", 500, 300),
    ("Jones", "2017 Pinot Noir", 500, 400),
    ("Smith", "2017 Pinot Noir", 500, 500);
	

SELECT * FROM customerInfo;
SELECT * FROM mainInventory;
SELECT * FROM orders;
SELECT * FROM labels;


