use creativoDB


-- Insert records into the table Admins (Administrators of the Creative Club)
INSERT INTO Admins (IdAdmin, Username, Password, FirstName, LastName)
VALUES
    (2378954,'admin1', '1234', 'Alejandro', 'Gómez'),
    (2374573,'admin2', '1234', 'María', 'Martínez'),
    (2390847,'admin3', '1234', 'Carlos', 'Sánchez'),
    (1234234,'admin4', '1234', 'Laura', 'Pérez'),
    (5647343,'admin5', '1234', 'Javier', 'López');


-- Insert records into the table Question (Frequently Asked Questions of the Creative Club)
INSERT INTO Question (Question, Answer)
VALUES
    ('¿Cómo puedo participar en las ferias del Club Creativo?', 'Para participar, regístrate como emprendedor en nuestro sitio web y envía tu propuesta creativa.'),
    ('¿Cuándo son las próximas ferias de arte?', 'Consulta nuestro calendario en línea para conocer las fechas de nuestras próximas ferias.'),
    ('¿Hay algún costo asociado a la participación en las ferias?', 'Sí, hay una tarifa de participación que varía según el tipo de emprendimiento y el espacio solicitado.'),
    ('¿Puedo participar como artista individual?', '¡Claro! Aceptamos participantes individuales y grupos creativos.'),
    ('¿Cómo puedo contactar al equipo del Club Creativo?', 'Puedes contactarnos a través de nuestro correo electrónico info@clubcreativo.com o llamando al 8759-0323.');

-- Insert into ENTREPRENEURSHIP
INSERT INTO ENTREPRENEURSHIP (IdEntrepreneurship, Username, Type, Name, Email, Sinpe, Phone, Province, Canton, District, State)
VALUES
    (8293401, 'e7', 'Arte', 'Galería Creativa', 'galeria@example.com', '87649076', '87650938', 'San José', 'Escazú', 'Distrito1', 'Pendiente'),
    (2342355, 'e2', 'Cocina', 'Sabores Innovadores', 'sabores@example.com', '289648375', '89765903', 'Heredia', 'Belén', 'Distrito2', 'Pendiente'),
    (2346236, 'e3', 'Manualidades', 'Hecho a Mano', 'hechoamano@example.com', '70986345', '72348593', 'Cartago', 'Cartago', 'Distrito3', 'Pendiente'),
    (2356346, 'e4', 'Moda', 'Estilo Creativo', 'estilo@example.com', '88769504', '70987345', 'Alajuela', 'Alajuela', 'Distrito4', 'Pendiente'),
    (3452323, 'e5', 'Fotografía', 'Capturas Creativas', 'capturas@example.com', '61897658', '89764903', 'Puntarenas', 'Puntarenas', 'Distrito5', 'Pendiente');

-- Insertar usuario 1
INSERT INTO Client (Username, Password, FirstName, LastName, Phone, Province, Canton, District)
VALUES 
	('u1', '1234', 'Nombre1', 'Apellido1', '123456789', 'San José', 'San José', 'San José'),
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
('San José');



-- Insertar datos en la tabla Canton
INSERT INTO Canton (Name, Province) VALUES
('Heredia', 'Heredia'),
('Barva', 'Heredia'),
('Santo Domingo', 'Heredia'),
('Santa Bárbara', 'Heredia'),
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
('Santa Lucía', 'Barva'),
('San José de la Montaña', 'Barva'),
('Santo Domingo', 'Santo Domingo'),
('San Vicente', 'Santo Domingo'),
('San Miguel', 'Santo Domingo'),
('Paracito', 'Santo Domingo'),
('Santo Tomás', 'Santo Domingo'),
('Santa Rosa', 'Santo Domingo'),
('Santa Bárbara', 'Santa Bárbara'),
('San Juan', 'Santa Bárbara'),
('Jesús', 'Santa Bárbara'),
('Purabá', 'Santa Bárbara'),
('San Rafael', 'San Rafael'),
('San Josecito', 'San Rafael'),
('Santiago', 'San Rafael'),
('Ángeles', 'San Rafael'),
('Concepción', 'San Rafael'),
('San Isidro', 'San Rafael');


-- Insertar datos en la tabla Canton
INSERT INTO Canton (Name, Province) VALUES
('San José', 'San José'),
('Escazú', 'San José'),
('Desamparados', 'San José'),
('Puriscal', 'San José'),
('Tarrazú', 'San José'),
('Aserrí', 'San José'),
('Mora', 'San José'),
('Goicoechea', 'San José'),
('Santa Ana', 'San José'),
('Alajuelita', 'San José'),
('Vázquez de Coronado', 'San José'),
('Acosta', 'San José'),
('Tibás', 'San José'),
('Moravia', 'San José'),
('Montes de Oca', 'San José'),
('Turrubares', 'San José'),
('Dota', 'San José'),
('Curridabat', 'San José'),
('Pérez Zeledón', 'San José'),
('León Cortés Castro', 'San José');


-- Insertar datos en la tabla District
INSERT INTO Distric (Name, Canton) VALUES
('San José', 'San José'),
('Escazú', 'Escazú'),
('Desamparados', 'Desamparados'),
('Santiago', 'Desamparados'),
('San Rafael Arriba', 'Desamparados'),
('San Antonio', 'Desamparados'),
('San Cristóbal', 'Desamparados'),
('Rosario', 'Desamparados'),
('Damas', 'Desamparados'),
('San Juan de Dios', 'Desamparados'),
('Gravilias', 'Desamparados'),
('Los Guido', 'Desamparados'),
('Sánchez', 'Desamparados'),
('San Miguel', 'Desamparados'),
('San Juan', 'Desamparados'),
('San Rafael Abajo', 'Desamparados'),
('Colón', 'Puriscal'),
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
('Aserrí', 'Aserrí'),
('Tarbaca', 'Aserrí'),
('Vuelta de Jorco', 'Aserrí'),
('San Gabriel', 'Aserrí'),
('Legua', 'Aserrí'),
('Monterrey', 'Aserrí'),
('Salitrillos', 'Aserrí'),
('San Isidro', 'Mora'),
('Colón', 'Mora'),
('Guayabo', 'Mora'),
('Tabarcia', 'Mora'),
('Piedras Negras', 'Mora'),
('Jaris', 'Mora'),
('Quitirrisí', 'Mora'),
('Ipís', 'Goicoechea'),
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
('Concepción', 'Vázquez de Coronado'),
('San Isidro', 'Vázquez de Coronado'),
('San Rafael', 'Vázquez de Coronado'),
('Dulce Nombre de Jesús', 'Vázquez de Coronado'),
('Patalillo', 'Vázquez de Coronado'),
('Cascajal', 'Vázquez de Coronado'),
('San Juan', 'Acosta'),
('San Ignacio', 'Acosta'),
('Guaitil', 'Acosta'),
('Palmichal', 'Acosta'),
('Cipreses', 'Acosta'),
('San José', 'Tibás'),
('Cinco Esquinas', 'Tibás'),
('Anselmo Llorente', 'Tibás'),
('León XIII', 'Tibás'),
('Colima', 'Tibás'),
('San Juan', 'Moravia'),
('La Trinidad', 'Moravia'),
('San Vicente', 'Moravia'),
('San Jerónimo', 'Moravia'),
('San Diego', 'Moravia'),
('San Rafael', 'Moravia'),
('San Luis', 'Moravia'),
('San Pedro', 'Montes de Oca'),
('Sabanilla', 'Montes de Oca'),
('Mercedes', 'Montes de Oca'),
('San Rafael', 'Montes de Oca'),
('San Antonio', 'Montes de Oca'),
('Concepción', 'Montes de Oca'),
('San Juan de Mata', 'Turrubares'),
('San Luis', 'Turrubares'),
('Carara', 'Turrubares'),
('Copey', 'Turrubares'),
('Jardín', 'Turrubares'),
('Dota', 'Dota'),
('Santa María', 'Dota'),
('Jardín', 'Dota'),
('Copey', 'Dota'),
('San Francisco de Dos Ríos', 'Curridabat'),
('Cipreses', 'Curridabat'),
('Curridabat', 'Curridabat'),
('Granadilla', 'Curridabat'),
('Sánchez', 'Curridabat'),
('Tirrases', 'Curridabat'),
('Río Nuevo', 'Pérez Zeledón'),
('Páramo', 'Pérez Zeledón'),
('La Palma', 'Pérez Zeledón'),
('Rivas', 'Pérez Zeledón'),
('San Isidro de El General', 'Pérez Zeledón'),
('Pejibaye', 'Pérez Zeledón'),
('La Amistad', 'Pérez Zeledón'),
('Platanares', 'Pérez Zeledón'),
('Barú', 'Pérez Zeledón'),
('Cajón', 'Pérez Zeledón'),
('La Colonia', 'León Cortés Castro'),
('San Antonio', 'León Cortés Castro'),
('San Isidro', 'León Cortés Castro');