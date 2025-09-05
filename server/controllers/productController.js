// controllers/productController.js
import ProductService from "../services/productService.js";

const getAllProducts = async (req, res) => {
  try {
    const { keywords, category } = req.query;
    const products = await ProductService.getAllProducts(keywords, category);
    return res.json({ data: products });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await ProductService.getProductById(req.params.id);
    return res.json({ data: product });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const productData = (({ name, price, image, description, category }) => 
      ({ name, price, image, description, category }))(req.body);

    const newProduct = await ProductService.createProduct(productData);
    return res.json({ data: newProduct });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const productData = (({ name, price, image, description, category }) => 
      ({ name, price, image, description, category }))(req.body);

    const updated = await ProductService.updateProduct(req.params.id, productData);
    return res.json({ data: updated });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await ProductService.deleteProduct(req.params.id);
    return res.json({ message: "Product deleted successfully" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export default { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
