
-- Utilizar la base de datos creativoDB
USE creativoDB;

-- Crear la tabla PREGUNTAS
CREATE TABLE PREGUNTAS (
    IdPreguntas INT IDENTITY(1,1) PRIMARY KEY,
    Pregunta VARCHAR(255),
    Respuesta VARCHAR(255)
);

-- Crear la tabla REPARTIDOR
CREATE TABLE REPARTIDOR (
    IdRepartidor INT PRIMARY KEY,
    Usuario VARCHAR(50),
    Pass VARCHAR(50),
    Nombre VARCHAR(100),
    Apellidos VARCHAR(100),
    Estado VARCHAR(50),
    Provincia VARCHAR(50),
    Canton VARCHAR(50),
    Distrito VARCHAR(50),
    Telefono VARCHAR(20)
);

-- Crear la tabla EMPRENDIMIENTO
CREATE TABLE EMPRENDIMIENTO (
    IdEmprendimiento INT PRIMARY KEY,
    Usuario VARCHAR(50),
    Pass VARCHAR(50),
    Tipo VARCHAR(50),
    Nombre VARCHAR(100),
    Correo VARCHAR(100),
    Sinpe VARCHAR(20),
    Telefono VARCHAR(20),
    Provincia VARCHAR(50),
    Canton VARCHAR(50),
    Distrito VARCHAR(50),
    Estado VARCHAR(50)
);

-- Crear la tabla TALLER
CREATE TABLE TALLER (
    IdEmprendimiento INT,
    Nombre VARCHAR(100) PRIMARY KEY,
    Precio DECIMAL(10, 2),
    Descripcion TEXT,
    Link VARCHAR(255),
    Tipo VARCHAR(50),
    FOREIGN KEY (IdEmprendimiento) REFERENCES EMPRENDIMIENTO(IdEmprendimiento)
);

-- Crear la tabla CLIENTE
CREATE TABLE CLIENTE (
    IdCliente INT IDENTITY(1,1) PRIMARY KEY,
    Usuario VARCHAR(50),
    Pass VARCHAR(50),
    Nombre VARCHAR(100),
    Apellidos VARCHAR(100),
    Telefono VARCHAR(20),
    Provincia VARCHAR(50),
    Canton VARCHAR(50),
    Distrito VARCHAR(50)
);

-- Crear la tabla TALLER_FOTOS
CREATE TABLE TALLER_FOTOS (
    Taller VARCHAR(100),
    Foto VARCHAR(255),
    PRIMARY KEY (Taller, Foto),
    FOREIGN KEY (Taller) REFERENCES TALLER(Nombre)
);

-- Crear la tabla TALLER_CLIENTE
CREATE TABLE TALLER_CLIENTE (
    Taller VARCHAR(100),
    IdCliente INT,
    PRIMARY KEY (Taller, IdCliente),
    FOREIGN KEY (Taller) REFERENCES TALLER(Nombre),
    FOREIGN KEY (IdCliente) REFERENCES CLIENTE(IdCliente)
);

-- Crear la tabla ADMIN
CREATE TABLE ADMIN (
    IdAdmin INT PRIMARY KEY,
    Usuario VARCHAR(50),
    Pass VARCHAR(50),
    Nombre VARCHAR(100),
    Apellidos VARCHAR(100)
);

-- Crear la tabla PEDIDO
CREATE TABLE PEDIDO (
    IdPedido INT IDENTITY(1,1) PRIMARY KEY,
    Direccion VARCHAR(255),
    Estado VARCHAR(50),
    IdRepartidor INT,
    IdCliente INT,
    FOREIGN KEY (IdRepartidor) REFERENCES REPARTIDOR(IdRepartidor),
    FOREIGN KEY (IdCliente) REFERENCES CLIENTE(IdCliente)
);
