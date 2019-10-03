DROP DATABASE IF EXISTS main_wine;
CREATE DATABASE main_wine;
USE main_wine;


CREATE TABLE mainInventory (
	id int NOT NULL AUTO_INCREMENT,
	vintage VARCHAR(100) NOT NULL,
	varietal VARCHAR(100) NOT NULL,
	actualInventory INTEGER(5) NOT NULL,
	shadowInventory INTEGER(5) NOT NULL,
	boxType VARCHAR(100) NOT NULL,
	updatedAt TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
  createdAt TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
	PRIMARY KEY (id)
);

CREATE TABLE boxes (

	id int NOT NULL AUTO_INCREMENT,
	boxType VARCHAR(100) NOT NULL,
	onHand INTEGER(10) NOT NULL,
	needed INTEGER(10) NOT NULL,
	updatedAt TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
  createdAt TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
	PRIMARY KEY (id)
);

CREATE TABLE customerInfo (
	id int NOT NULL AUTO_INCREMENT,
	clientName VARCHAR(100) NOT NULL,
	primaryContact VARCHAR(100) NOT NULL,
	phone VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL,
	streetAddress VARCHAR(100) NOT NULL,
	city VARCHAR(100) NOT NULL,
	ST VARCHAR(5) NOT NULL,
	zipcode VARCHAR(7) NOT NULL,
	updatedAt TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
    createdAt TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
	PRIMARY KEY (id)
);

CREATE TABLE orders (
	id int NOT NULL AUTO_INCREMENT,
	accountName VARCHAR(100) NOT NULL,
	vintage VARCHAR(100) NOT NULL,
	varietal VARCHAR(100) NOT NULL,
	actualOrdered INTEGER(5),
	promised INTEGER(5),
	boxType VARCHAR(100),
	-- labelsLeft INTEGER(5),
	notes VARCHAR(200),
	updatedAt TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
    createdAt TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
	PRIMARY KEY (id)
);

CREATE TABLE labels (
	id int NOT NULL AUTO_INCREMENT,
	accountName VARCHAR(100) NOT NULL,
	vintage VARCHAR(100) NOT NULL,
	varietal VARCHAR(100) NOT NULL,
	promised INTEGER(10),
	labelsLeft INTEGER(5),
	updatedAt TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
    createdAt TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
	PRIMARY KEY (id)
);
