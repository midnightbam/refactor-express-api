// services/productService.js
import ProductRepository from "../repositories/productRepository.js";

const getAllProducts = async (name, category) => {
  const query = {};
  if (name) query.name = new RegExp(name, "i");
  if (category) query.category = new RegExp(category, "i");

  return await ProductRepository.findAll(query);
};

const getProductById = async (id) => {
  return await ProductRepository.findById(id);
};

const createProduct = async (productData) => {
  const newData = { ...productData, created_at: new Date() };
  return await ProductRepository.create(newData);
};

const updateProduct = async (id, productData) => {
  const newData = { ...productData, modified_at: new Date() };
  return await ProductRepository.update(id, newData);
};

const deleteProduct = async (id) => {
  return await ProductRepository.delete(id);
};

export default { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
