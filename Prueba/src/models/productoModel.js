const db = require('../db');

const getAllProductos = () => db.query('SELECT * FROM productos');

const getProductoById = (id) => db.query('SELECT * FROM productos WHERE id = $1', [id]);

const createProducto = (nombre, precio, stock) =>
  db.query('INSERT INTO productos (nombre, precio, stock) VALUES ($1, $2, $3) RETURNING *', [nombre, precio, stock]);

const updateProducto = (id, nombre, precio, stock) =>
  db.query('UPDATE productos SET nombre = $1, precio = $2, stock = $3 WHERE id = $4 RETURNING *', [nombre, precio, stock, id]);

const deleteProducto = (id) => db.query('DELETE FROM productos WHERE id = $1 RETURNING *', [id]);

module.exports = {
  getAllProductos,
  getProductoById,
  createProducto,
  updateProducto,
  deleteProducto
};
