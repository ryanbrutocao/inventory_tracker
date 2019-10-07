INSERT INTO mainInventory (vintage, varietal, actualInventory, shadowInventory, boxType) 
VALUES 
	("2016", "Chardonnay", 500, 500, "WRU"),
	("2017", "Chardonnay", 300, 300, "WRU"),
	("2018", "Chardonnay", 500, 500, "WRU"),
	("2016", "Sauvignon Blanc", 500, 500, "WRT"),
	("2017", "Sauvignon Blanc", 300, 300, "WRT"),
	("2018", "Sauvignon Blanc", 500, 500, "WRT"),
	("2016", "Pinot Noir", 500, 500, "WRU"),
	("2017", "Pinot Noir", 400, 400, "WRU"),
	("2018", "Pinot Noir", 500, 500, "WRU"),
	("2016", "Merlot", 500, 500, "WBAJA"),
	("2017", "Merlot", 700, 700, "WBAJA"),
		("2018", "Merlot", 700, 700, "WBAJA"),

	


INSERT INTO boxes (boxType, onHand)
VALUES
	("WRT", 3000),
	("WRU", 4000),
	("WBAJA", 5000);



INSERT INTO customerInfo (clientName, primaryContact, phone, email, streetAddress, city, ST, zipcode, notes) 
VALUES 
	("Mack", "Mack", "123-456-7890","mack@winecompany.com", "123 Main St", "New York City", "NY", "01234", " "),
	("Jared", "Jared", "234-456-7890","jared@winecompany.com", "123 Main St", "San Francisco", "CA", "23456", " "),
	("Steven", "Steven", "345-456-7890", "steven@winecompany.com", "123 Main St", "Charlotte", "NC", "34567", " ");


-- INSERT INTO orders (accountName, vintage, varietal, actualOrdered, promised, boxType)
-- VALUES
-- 	("Jared", "2016", "Chardonnay", 0, 100, "WRU"),
-- 	("Mack", "2017", "Pinot Noir", 0, 200, "WRU"),
-- 	("Steven", "2018", "Sauvignon Blanc", 0, 0, "WRT"),
-- 	("Mack", "2017", "Pinot Noir", 100, 100, "WRU");

-- INSERT INTO labels (accountName, vintage, varietal, promised, labelsLeft)
-- VALUES
-- 	("Mack", "2017", "Pinot Noir", 100, 3000),
--     ("Jared", "2016", "Chardonnay", 100, 4000),
--     ("Steven", "2018", "Sauvignon Blanc", 0, 5000);
	

SELECT * FROM customerInfo;
SELECT * FROM boxes;
SELECT * FROM mainInventory;
SELECT * FROM orders;
SELECT * FROM labels;


