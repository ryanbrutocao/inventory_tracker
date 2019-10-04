INSERT INTO mainInventory (vintage, varietal, actualInventory, shadowInventory, boxType) 
VALUES 
	("2016", "Chardonnay", 500, 500, "WRT"),
	("2017", "Chardonnay", 300, 300, "WRT"),
	("2018", "Chardonnay", 500, 500, "WRT"),
	("2016", "Pinot Noir", 500, 500, "WRU"),
	("2017", "Pinot Noir", 400, 400, "WRU"),
	("2018", "Pinot Noir", 500, 500, "WRU"),
	("2016", "Merlot", 500, 500, "WBAJA");


INSERT INTO boxes (boxType, onHand)
VALUES
	("WRT", 3000),
	("WRU", 4000),
	("WBAJA", 5000);



INSERT INTO customerInfo (clientName, primaryContact, phone, email, streetAddress, city, ST, zipcode, notes) 
VALUES 
	("Mack", "Mack", "123-456-7890","melissa@winecompany.com", "123 Main St", "New York City", "NY", "01234", "notes test"),
	("Jared", "Jared", "234-456-7890","jared@winecompany.com", "123 Main St", "San Francisco", "CA", "23456", "notes test"),
	("Steven", "Steven", "345-456-7890", "steven@winecompany.com", "123 Main St", "Charlotte", "NC", "34567", "notes test");


INSERT INTO orders (accountName, vintage, varietal, actualOrdered, promised, boxType, notes)
VALUES
	("Jones", "2016", "Chardonnay", 0, 100, "WRT",  "test"),
	("Mack", "2017", "Pinot Noir", 0, 200, "WRU",  "test"),
	("Smith", "2018", "Sauvignon Blanc", 0, 0,  "WBAJA", "test"),
	("Mack", "2017", "Pinot Noir", 100, 0, "WRU", "test");

INSERT INTO labels (accountName, vintage, varietal, promised, labelsLeft)
VALUES
	("Mack", "2017", "Pinot Noir", 1000, 300),
    ("Jared", "2017", "Chardonnay", 1000, 400),
    ("Steven", "2017", "Merlot", 1000, 500);
	

SELECT * FROM customerInfo;
SELECT * FROM boxes;
SELECT * FROM mainInventory;
SELECT * FROM orders;
SELECT * FROM labels;


