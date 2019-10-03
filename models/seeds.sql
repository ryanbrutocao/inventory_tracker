INSERT INTO mainInventory (vintage, varietal, actualInventory, shadowInventory) 
VALUES 
	("2016", "Chardonnay", 500, 500),
	("2017", "Chardonnay", 300, 300),
	("2018", "Chardonnay", 500, 500),
	("2016", "Pinot Noir", 500, 500),
	("2017", "Pinot Noir", 400, 400),
	("2018", "Pinot Noir", 500, 500),
	("2016", "Merlot", 500, 500);


	INSERT INTO boxes (boxType, onHand, needed)
	VALUES
	("box 1", 3000, 2000),
	("box 2", 4000, 2000),
	("box 3", 5000, 2000);



INSERT INTO customerInfo (clientName, primaryContact, phone, email, streetAddress, city, ST, zipcode) 
VALUES 
	("Melissa", "Melissa", "123-456-7890","melissa@winecompany.com", "123 Main St", "New York City", "NY", "01234"),
	("Jared", "Jared", "234-456-7890","jared@winecompany.com", "123 Main St", "San Francisco", "CA", "23456"),
	("Steven", "Steven", "345-456-7890", "steven@winecompany.com", "123 Main St", "Charlotte", "NC", "34567");


INSERT INTO orders (accountName, vintage, varietal, actualOrdered, promised, boxType, notes)
VALUES
	("Jones", "2016", "Chardonnay", 0, 100, "0",  "test"),
	("Mack", "2017", "Pinot Noir", 0, 200, "0",  "test"),
	("Smith", "2018", "Sauvignon Blanc", 0, 0,  "0", "test"),
	("Mack", "2017", "Pinot Noir", 100, 0, "0", "test");

INSERT INTO labels (accountName, wine, labelsLeft)
VALUES
	("Mack", "2017 Pinot Noir", 300),
    ("Jones", "2017 Pinot Noir", 400),
    ("Smith", "2017 Pinot Noir", 500);
	

SELECT * FROM customerInfo;
SELECT * FROM mainInventory;
SELECT * FROM orders;
SELECT * FROM labels;


