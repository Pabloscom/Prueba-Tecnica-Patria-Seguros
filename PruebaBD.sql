CREATE TABLE producto (
    id SERIAL PRIMARY KEY,
    nombre TEXT NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    stock INTEGER NOT NULL
);