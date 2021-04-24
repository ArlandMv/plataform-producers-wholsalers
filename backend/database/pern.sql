--connection
--psql -h 'hostname/ip' -p 5432 -U postgresql 

CREATE DATABASE perndb;

CREATE TABLE users(
    id BIGSERIAL PRIMARY KEY,
    rut VARCHAR(8) UNIQUE,
    dv varchar(1) NOT NULL,
    nombre varchar(40) NOT NULL,
    apellidoPno varchar(40) NOT NULL,
    apellidoMno varchar(40) NOT NULL,
    email TEXT NOT NULL,
    contrasena TEXT NOT NULL,
    cell INT
);

INSERT INTO users (rut,dv,nombre,apellidoPno,apellidoMno,email,contrasena,cell) 
VALUES ('23642802','8','arland','michelena','villegas','arlandmv@gmail.com','cielo',97722404);