use creativoDB

-- Insertar registros en la tabla ADMIN (Administradores del Club Creativo)
INSERT INTO ADMIN (IdAdmin,Usuario, Pass, Nombre, Apellidos)
VALUES
    (2378954,'admin1', '1234', 'Alejandro', 'Gómez'),
    (2374573,'admin2', '1234', 'María', 'Martínez'),
    (2390847,'admin3', '1234', 'Carlos', 'Sánchez'),
    (1234234,'admin4', '1234', 'Laura', 'Pérez'),
    (5647343,'admin5', '1234', 'Javier', 'López');

-- Insertar registros en la tabla PREGUNTAS (Preguntas frecuentes del Club Creativo)
INSERT INTO PREGUNTAS (Pregunta, Respuesta)
VALUES
    ('¿Cómo puedo participar en las ferias del Club Creativo?', 'Para participar, regístrate como emprendedor en nuestro sitio web y envía tu propuesta creativa.'),
    ('¿Cuándo son las próximas ferias de arte?', 'Consulta nuestro calendario en línea para conocer las fechas de nuestras próximas ferias.'),
    ('¿Hay algún costo asociado a la participación en las ferias?', 'Sí, hay una tarifa de participación que varía según el tipo de emprendimiento y el espacio solicitado.'),
    ('¿Puedo participar como artista individual?', '¡Claro! Aceptamos participantes individuales y grupos creativos.'),
    ('¿Cómo puedo contactar al equipo del Club Creativo?', 'Puedes contactarnos a través de nuestro correo electrónico info@clubcreativo.com o llamando al 8759-0323.');

-- Insertar registros en la tabla EMPRENDIMIENTO (Emprendimientos participantes en las ferias)
INSERT INTO EMPRENDIMIENTO (IdEmprendimiento,Usuario, Pass, Tipo, Nombre, Correo, Sinpe, Telefono, Provincia, Canton, Distrito, Estado)
VALUES
    (8293471, 'e1', '1234', 'Arte', 'Galería Creativa', 'galeria@example.com', '87649076', '87650938', 'San José', 'Escazú', 'Distrito1', 'Pendiente'),
    (2342355, 'e2', '1234', 'Cocina', 'Sabores Innovadores', 'sabores@example.com', '289648375', '89765903', 'Heredia', 'Belén', 'Distrito2', 'Pendiente'),
    (2346236, 'e3', '1234', 'Manualidades', 'Hecho a Mano', 'hechoamano@example.com', '70986345', '72348593', 'Cartago', 'Cartago', 'Distrito3', 'Pendiente'),
    (2356346, 'e4', '1234', 'Moda', 'Estilo Creativo', 'estilo@example.com', '88769504', '70987345', 'Alajuela', 'Alajuela', 'Distrito4', 'Pendiente'),
    (3452323, 'e5', '1234', 'Fotografía', 'Capturas Creativas', 'capturas@example.com', '61897658', '89764903', 'Puntarenas', 'Puntarenas', 'Distrito5', 'Pendiente');
