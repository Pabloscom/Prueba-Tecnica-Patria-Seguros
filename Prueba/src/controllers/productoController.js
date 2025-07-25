const model = require('../models/productoModel');

const getAll = async (req, res) => {
  const result = await model.getAllProductos();
  res.json(result.rows);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await model.getProductoById(id);
  if (result.rows.length === 0) return res.status(404).json({ error: 'Producto no encontrado' });
  res.json(result.rows[0]);
};

const create = async (req, res) => {
  const { nombre, precio, stock } = req.body;
  if (!nombre || !precio || !stock) return res.status(400).json({ error: 'Faltan campos requeridos' });

  const result = await model.createProducto(nombre, precio, stock);
  res.status(201).json(result.rows[0]);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { nombre, precio, stock } = req.body;
  if (!nombre || !precio || !stock) return res.status(400).json({ error: 'Faltan campos requeridos' });

  const result = await model.updateProducto(id, nombre, precio, stock);
  if (result.rows.length === 0) return res.status(404).json({ error: 'Producto no encontrado' });

  res.json(result.rows[0]);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const result = await model.deleteProducto(id);
  if (result.rows.length === 0) return res.status(404).json({ error: 'Producto no encontrado' });

  res.json({ mensaje: 'Producto eliminado' });
};

module.exports = { getAll, getById, create, update, remove };
