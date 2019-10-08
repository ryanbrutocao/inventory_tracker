INSERT INTO mainInventory
	(vintage, varietal, actualInventory, shadowInventory, boxType)
VALUES

	("2017", "Sauvignon Blanc", 300, 300, "WRT"),
	("2018", "Sauvignon Blanc", 500, 500, "WRT"),
	("2017", "Chardonnay", 300, 300, "WRU"),
	("2018", "Chardonnay", 800, 800, "WRU"),
	("2016", "Pinot Noir", 500, 500, "WRU"),
	("2017", "Pinot Noir", 600, 600, "WRU"),
	("2018", "Pinot Noir", 700, 700, "WRU"),
	("2017", "Red Blend", 700, 700, "WBAJA"),
	("2018", "Red Blend", 700, 700, "WBAJA"),
	("2017", "Merlot", 700, 700, "WBAJA"),
	("2018", "Merlot", 700, 700, "WBAJA"),
	("2017", "Zinfandel", 700, 700, "WBAJA"),
	("2018", "Zinfandel", 700, 700, "WBAJA"),
	("2017", "Cabernet", 1000, 1000, "WBAJA"),
	("2018", "Cabernet", 1000, 1000, "WBAJA");




INSERT INTO boxes
	(boxType, onHand)
VALUES
	("WRT", 3000),
	("WRU", 4000),
	("WBAJA", 5000);



INSERT INTO customerInfo
	(clientName, primaryContact, phone, email, streetAddress, city, ST, zipcode, notes)
VALUES
	("Mack", "Mack", "123-456-7890", "mack@winecompany.com", "123 Main St", "New York City", "NY", "01234", " "),
	("Jared", "Jared", "234-456-7890", "jared@winecompany.com", "123 Main St", "San Francisco", "CA", "23456", " "),
	("Melissa", "Melissa", "345-456-7890", "Melissa@winecompany.com", "123 Main St", "Charlotte", "NC", "34567", " ");


INSERT INTO orders (accountName, vintage, varietal, actualOrdered, promised, boxType)
VALUES
	("Jared", "2016", "Chardonnay", 100, 100, "WRU"),
	("Mack", "2017", "Pinot Noir", 0, 500, "WRU"),
	("Melissa", "2018", "Sauvignon Blanc", 0, 200, "WRT"),
	("Mack", "2017", "Pinot Noir", 250, 250, "WRU");

INSERT INTO labels (accountName, vintage, varietal, promised, labelsLeft)
VALUES
	("Mack", "2017", "Pinot Noir", 250, 3000),
    ("Jared", "2018", "Chardonnay", 200, 2400),
    ("Steven", "2018", "Sauvignon Blanc", 400, 5000);


SELECT *
FROM customerInfo;
SELECT *
FROM boxes;
SELECT *
FROM mainInventory;
SELECT *
FROM orders;
SELECT *
FROM labels;


