
-- Utilizar la base de datos creativoDB
USE creativoDB;

-- Crear la tabla PREGUNTAS
CREATE TABLE Question (
    IdQuestion INT IDENTITY(1,1) PRIMARY KEY,
    Question VARCHAR(255),
    Answer VARCHAR(255)
);


-- Create the table ENTREPRENEURSHIP ***************************
CREATE TABLE Entrepreneurship (
	IdEntrepreneurship INT PRIMARY KEY,
	Username VARCHAR(50),
	Type VARCHAR(50),
	Name VARCHAR(100),
	Email VARCHAR(100),
	Sinpe VARCHAR(20),
	Phone VARCHAR(20),
	Province VARCHAR(50),
	Canton VARCHAR(50),
	District VARCHAR(50),
	State VARCHAR(50)
);




-- Create the table Client
CREATE TABLE Client (
	IdClient INT IDENTITY(1,1) PRIMARY KEY,
	Username VARCHAR(50),
	Password VARCHAR(50),
	FirstName VARCHAR(100),
	LastName VARCHAR(100),
	Phone VARCHAR(20),
	Province VARCHAR(50),
	Canton VARCHAR(50),
	District VARCHAR(50)
);



-- Create the table ENTREPRENEURSHIP ADMINS
CREATE TABLE Entrepreneurship_Admins (
	IdEntrepreneurship VARCHAR(50), 
	IdClient VARCHAR(50), 
	state VARCHAR(50),
	PRIMARY KEY (IdEntrepreneurship, IdClient)
	);



-- Create the table WORKSHOP
CREATE TABLE Workshop (
	IdEntrepreneurship INT,
	IdWorkshop INT IDENTITY(1,1) PRIMARY KEY,
	Name VARCHAR(100),
	Price DECIMAL(10, 2),
	Description TEXT,
	Link VARCHAR(255),
	Type VARCHAR(50),
	FOREIGN KEY (IdEntrepreneurship) REFERENCES EntrepreneurshiP(IdEntrepreneurship)
);




-- Create the table WORKSHOP_PHOTOS
CREATE TABLE Workshop_Photos (
	IdWorkshop INT,
	Photo VARCHAR(255),
	PRIMARY KEY (IdWorkshop, Photo),
	FOREIGN KEY (IdWorkshop) REFERENCES Workshop(IdWorkshop)
);


-- Create the table WORKSHOP_CLIENT
CREATE TABLE Workshop_Client (
	IdWorkshop INT,
	IdClient INT,
	PRIMARY KEY (IdWorkshop, IdClient),
	FOREIGN KEY (IdWorkshop) REFERENCES Workshop(IdWorkshop),
	FOREIGN KEY (IdClient) REFERENCES Client(IdClient)
);


-- Create the table ADMIN
CREATE TABLE Admins (
	IdAdmin INT PRIMARY KEY,
	Username VARCHAR(50),
	Password VARCHAR(50),
	FirstName VARCHAR(100),
	LastName VARCHAR(100)
);

-- Create the table DELIVERY_PERSON
CREATE TABLE Delivery_Person (
	IdDeliveryPerson INT PRIMARY KEY,
	Username VARCHAR(50),
	Password VARCHAR(50),
	Firstname VARCHAR(100),
	Lastname VARCHAR(100),
	State VARCHAR(50),
	Province VARCHAR(50),
	Canton VARCHAR(50),
	District VARCHAR(50),
	Phone VARCHAR(20)
);


-- Create the table ORDER
CREATE TABLE Orders (
	IdOrder INT IDENTITY(1,1) PRIMARY KEY,
	Address VARCHAR(255),
	State VARCHAR(50),
	IdDeliveryPerson INT,
	IdClient INT,
	FOREIGN KEY (IdDeliveryPerson) REFERENCES Delivery_Person(IdDeliveryPerson),
	FOREIGN KEY (IdClient) REFERENCES Client(IdClient)
);





-- Create the table ROLE
CREATE TABLE Role (
	Username VARCHAR(50) PRIMARY KEY,
	Type VARCHAR(50)
);

CREATE TABLE Province (
	Name VARCHAR(50) PRIMARY KEY,
);

CREATE TABLE Canton (
	Name VARCHAR(50),
	Province VARCHAR(50),
	PRIMARY KEY (Name, Province)
);

CREATE TABLE Distric (
	Name VARCHAR(50),
	Canton VARCHAR(50),
	PRIMARY KEY (Name, Canton)
);


CREATE TRIGGER add_admin_rol ON Admins FOR INSERT AS 
BEGIN 
    INSERT INTO Role(Username, Type) SELECT Username, 'ADMIN' FROM inserted;
END

CREATE TRIGGER add_client_rol ON Client FOR INSERT AS 
BEGIN 
    INSERT INTO Role(Username, Type) SELECT Username, 'CLIENTE' FROM inserted;
END


CREATE TRIGGER add_repartidor_rol ON Delivery_Person FOR INSERT AS 
BEGIN 
    INSERT INTO Role(Username, Type) SELECT Username, 'REPARTIDOR' FROM inserted;
END