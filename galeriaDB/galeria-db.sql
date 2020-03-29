-- CREAR BASE DE DATOS
CREATE DATABASE "galeriaDB"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Peru.1252'
    LC_CTYPE = 'Spanish_Peru.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;


--CREAR TABLA FOTOGRAFICAS
CREATE TABLE public.fotografias (
    id serial primary key NOT NULL,
    fotografia character varying(200) NOT NULL,
    descripcion character varying(250),
    imagen character varying(200),
    numero integer NOT NULL,
    autor character varying(200) NOT NULL,
    activo boolean NOT NULL,
    usuario_creacion character varying(100) NOT NULL,
    "createdAt" date,
    "updatedAt" date
);

--CREAR TABLA USUARIO
CREATE TABLE public.usuarios (
    id serial primary key NOT NULL,
    usuario character varying(200) NOT NULL,
    password character varying(50) NOT NULL,
    id_rol integer NOT NULL,
    activo boolean NOT NULL,
    usuario_creacion character varying(100) NOT NULL,
	"createdAt" date,
    "updatedAt" date
);

--INSERTAR USUARIO
insert into usuarios (usuario,password, id_rol, activo,usuario_creacion) 
            values ('test4','123', '1', 'false', 'admin')
              