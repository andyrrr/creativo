use creativoDB


-- Insert records into the table Admins (Administrators of the Creative Club)
INSERT INTO Admins (IdAdmin, Username, Password, FirstName, LastName)
VALUES
    (2378954,'admin1', '1234', 'Alejandro', 'G�mez'),
    (2374573,'admin2', '1234', 'Mar�a', 'Mart�nez'),
    (2390847,'admin3', '1234', 'Carlos', 'S�nchez'),
    (1234234,'admin4', '1234', 'Laura', 'P�rez'),
    (5647343,'admin5', '1234', 'Javier', 'L�pez');


-- Insert records into the table Question (Frequently Asked Questions of the Creative Club)
INSERT INTO Question (Question, Answer)
VALUES
    ('�C�mo puedo participar en las ferias del Club Creativo?', 'Para participar, reg�strate como emprendedor en nuestro sitio web y env�a tu propuesta creativa.'),
    ('�Cu�ndo son las pr�ximas ferias de arte?', 'Consulta nuestro calendario en l�nea para conocer las fechas de nuestras pr�ximas ferias.'),
    ('�Hay alg�n costo asociado a la participaci�n en las ferias?', 'S�, hay una tarifa de participaci�n que var�a seg�n el tipo de emprendimiento y el espacio solicitado.'),
    ('�Puedo participar como artista individual?', '�Claro! Aceptamos participantes individuales y grupos creativos.'),
    ('�C�mo puedo contactar al equipo del Club Creativo?', 'Puedes contactarnos a trav�s de nuestro correo electr�nico info@clubcreativo.com o llamando al 8759-0323.');

-- Insert into ENTREPRENEURSHIP
INSERT INTO ENTREPRENEURSHIP (IdEntrepreneurship, Username, Type, Name, Email, Sinpe, Phone, Province, Canton, District, State)
VALUES
    (8293401, 'e7', 'Arte', 'Galer�a Creativa', 'galeria@example.com', '87649076', '87650938', 'San Jos�', 'Escaz�', 'Distrito1', 'Pendiente'),
    (2342355, 'e2', 'Cocina', 'Sabores Innovadores', 'sabores@example.com', '289648375', '89765903', 'Heredia', 'Bel�n', 'Distrito2', 'Pendiente'),
    (2346236, 'e3', 'Manualidades', 'Hecho a Mano', 'hechoamano@example.com', '70986345', '72348593', 'Cartago', 'Cartago', 'Distrito3', 'Pendiente'),
    (2356346, 'e4', 'Moda', 'Estilo Creativo', 'estilo@example.com', '88769504', '70987345', 'Alajuela', 'Alajuela', 'Distrito4', 'Pendiente'),
    (3452323, 'e5', 'Fotograf�a', 'Capturas Creativas', 'capturas@example.com', '61897658', '89764903', 'Puntarenas', 'Puntarenas', 'Distrito5', 'Pendiente');

-- Insertar usuario 1
INSERT INTO Client (Username, Password, FirstName, LastName, Phone, Province, Canton, District)
VALUES 
	('u1', '1234', 'Nombre1', 'Apellido1', '123456789', 'San Jos�', 'San Jos�', 'San Jos�'),
	('u2', '1234', 'Nombre2', 'Apellido2', '987654321', 'Heredia', 'Heredia', 'Heredia');

-- Insertar una fila en Entrepreneurship_Admins
INSERT INTO Entrepreneurship_Admins (IdEntrepreneurship, IdClient, state)
VALUES 
	('e5', 'u1', 'Aceptado'),
	('e2', 'u1', 'Pendiente'),
	('e3', 'u1', 'Pendiente'),
	('e7', 'u1', 'Aceptado'),
	('e2', 'u2', 'Aceptado'),
	('e5', 'u2', 'Pendiente');

-- Insertar datos en la tabla Province
INSERT INTO Province (Name) VALUES 
('Heredia');


-- Insertar datos en la tabla Province
INSERT INTO Province (Name) VALUES 
('San Jos�');



-- Insertar datos en la tabla Canton
INSERT INTO Canton (Name, Province) VALUES
('Heredia', 'Heredia'),
('Barva', 'Heredia'),
('Santo Domingo', 'Heredia'),
('Santa B�rbara', 'Heredia'),
('San Rafael', 'Heredia');


-- Insertar datos en la tabla District
INSERT INTO Distric (Name, Canton) VALUES
('Heredia', 'Heredia'),
('Mercedes', 'Heredia'),
('San Francisco', 'Heredia'),
('Ulloa', 'Heredia'),
('Varablanca', 'Heredia'),
('Barva', 'Barva'),
('San Pedro', 'Barva'),
('San Pablo', 'Barva'),
('San Roque', 'Barva'),
('Santa Luc�a', 'Barva'),
('San Jos� de la Monta�a', 'Barva'),
('Santo Domingo', 'Santo Domingo'),
('San Vicente', 'Santo Domingo'),
('San Miguel', 'Santo Domingo'),
('Paracito', 'Santo Domingo'),
('Santo Tom�s', 'Santo Domingo'),
('Santa Rosa', 'Santo Domingo'),
('Santa B�rbara', 'Santa B�rbara'),
('San Juan', 'Santa B�rbara'),
('Jes�s', 'Santa B�rbara'),
('Purab�', 'Santa B�rbara'),
('San Rafael', 'San Rafael'),
('San Josecito', 'San Rafael'),
('Santiago', 'San Rafael'),
('�ngeles', 'San Rafael'),
('Concepci�n', 'San Rafael'),
('San Isidro', 'San Rafael');


-- Insertar datos en la tabla Canton
INSERT INTO Canton (Name, Province) VALUES
('San Jos�', 'San Jos�'),
('Escaz�', 'San Jos�'),
('Desamparados', 'San Jos�'),
('Puriscal', 'San Jos�'),
('Tarraz�', 'San Jos�'),
('Aserr�', 'San Jos�'),
('Mora', 'San Jos�'),
('Goicoechea', 'San Jos�'),
('Santa Ana', 'San Jos�'),
('Alajuelita', 'San Jos�'),
('V�zquez de Coronado', 'San Jos�'),
('Acosta', 'San Jos�'),
('Tib�s', 'San Jos�'),
('Moravia', 'San Jos�'),
('Montes de Oca', 'San Jos�'),
('Turrubares', 'San Jos�'),
('Dota', 'San Jos�'),
('Curridabat', 'San Jos�'),
('P�rez Zeled�n', 'San Jos�'),
('Le�n Cort�s Castro', 'San Jos�');


-- Insertar datos en la tabla District
INSERT INTO Distric (Name, Canton) VALUES
('San Jos�', 'San Jos�'),
('Escaz�', 'Escaz�'),
('Desamparados', 'Desamparados'),
('Santiago', 'Desamparados'),
('San Rafael Arriba', 'Desamparados'),
('San Antonio', 'Desamparados'),
('San Crist�bal', 'Desamparados'),
('Rosario', 'Desamparados'),
('Damas', 'Desamparados'),
('San Juan de Dios', 'Desamparados'),
('Gravilias', 'Desamparados'),
('Los Guido', 'Desamparados'),
('S�nchez', 'Desamparados'),
('San Miguel', 'Desamparados'),
('San Juan', 'Desamparados'),
('San Rafael Abajo', 'Desamparados'),
('Col�n', 'Puriscal'),
('Puriscal', 'Puriscal'),
('Santiago', 'Puriscal'),
('Mercedes Sur', 'Puriscal'),
('Barbacoas', 'Puriscal'),
('Grifo Alto', 'Puriscal'),
('San Rafael', 'Puriscal'),
('Candelarita', 'Puriscal'),
('Desamparaditos', 'Puriscal'),
('San Antonio', 'Puriscal'),
('Chires', 'Puriscal'),
('Aserr�', 'Aserr�'),
('Tarbaca', 'Aserr�'),
('Vuelta de Jorco', 'Aserr�'),
('San Gabriel', 'Aserr�'),
('Legua', 'Aserr�'),
('Monterrey', 'Aserr�'),
('Salitrillos', 'Aserr�'),
('San Isidro', 'Mora'),
('Col�n', 'Mora'),
('Guayabo', 'Mora'),
('Tabarcia', 'Mora'),
('Piedras Negras', 'Mora'),
('Jaris', 'Mora'),
('Quitirris�', 'Mora'),
('Ip�s', 'Goicoechea'),
('Rancho Redondo', 'Goicoechea'),
('Purral', 'Goicoechea'),
('Sabanilla', 'Goicoechea'),
('Uruca', 'Goicoechea'),
('Mata Redonda', 'Goicoechea'),
('Pavas', 'Goicoechea'),
('Anselmo Llorente', 'Santa Ana'),
('Santa Ana', 'Santa Ana'),
('Salitral', 'Santa Ana'),
('Piedades', 'Santa Ana'),
('Brasil', 'Santa Ana'),
('Alajuelita', 'Alajuelita'),
('San Josecito', 'Alajuelita'),
('San Antonio', 'Alajuelita'),
('Concepci�n', 'V�zquez de Coronado'),
('San Isidro', 'V�zquez de Coronado'),
('San Rafael', 'V�zquez de Coronado'),
('Dulce Nombre de Jes�s', 'V�zquez de Coronado'),
('Patalillo', 'V�zquez de Coronado'),
('Cascajal', 'V�zquez de Coronado'),
('San Juan', 'Acosta'),
('San Ignacio', 'Acosta'),
('Guaitil', 'Acosta'),
('Palmichal', 'Acosta'),
('Cipreses', 'Acosta'),
('San Jos�', 'Tib�s'),
('Cinco Esquinas', 'Tib�s'),
('Anselmo Llorente', 'Tib�s'),
('Le�n XIII', 'Tib�s'),
('Colima', 'Tib�s'),
('San Juan', 'Moravia'),
('La Trinidad', 'Moravia'),
('San Vicente', 'Moravia'),
('San Jer�nimo', 'Moravia'),
('San Diego', 'Moravia'),
('San Rafael', 'Moravia'),
('San Luis', 'Moravia'),
('San Pedro', 'Montes de Oca'),
('Sabanilla', 'Montes de Oca'),
('Mercedes', 'Montes de Oca'),
('San Rafael', 'Montes de Oca'),
('San Antonio', 'Montes de Oca'),
('Concepci�n', 'Montes de Oca'),
('San Juan de Mata', 'Turrubares'),
('San Luis', 'Turrubares'),
('Carara', 'Turrubares'),
('Copey', 'Turrubares'),
('Jard�n', 'Turrubares'),
('Dota', 'Dota'),
('Santa Mar�a', 'Dota'),
('Jard�n', 'Dota'),
('Copey', 'Dota'),
('San Francisco de Dos R�os', 'Curridabat'),
('Cipreses', 'Curridabat'),
('Curridabat', 'Curridabat'),
('Granadilla', 'Curridabat'),
('S�nchez', 'Curridabat'),
('Tirrases', 'Curridabat'),
('R�o Nuevo', 'P�rez Zeled�n'),
('P�ramo', 'P�rez Zeled�n'),
('La Palma', 'P�rez Zeled�n'),
('Rivas', 'P�rez Zeled�n'),
('San Isidro de El General', 'P�rez Zeled�n'),
('Pejibaye', 'P�rez Zeled�n'),
('La Amistad', 'P�rez Zeled�n'),
('Platanares', 'P�rez Zeled�n'),
('Bar�', 'P�rez Zeled�n'),
('Caj�n', 'P�rez Zeled�n'),
('La Colonia', 'Le�n Cort�s Castro'),
('San Antonio', 'Le�n Cort�s Castro'),
('San Isidro', 'Le�n Cort�s Castro');