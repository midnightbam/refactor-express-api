// middlewares/productValidation.js
const validateProduct = (req, res, next) => {
  const { name, price, image, description, category } = req.body;

  if (!name || typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({ error: "Invalid product name" });
  }
  if (typeof price !== "number" || price <= 0) {
    return res.status(400).json({ error: "Invalid product price" });
  }
  if (!image || typeof image !== "string" || image.trim() === "") {
    return res.status(400).json({ error: "Invalid product image" });
  }
  if (!description || typeof description !== "string" || description.trim().length < 10) {
    return res.status(400).json({ error: "Invalid product description" });
  }
  if (!category || typeof category !== "string" || category.trim() === "") {
    return res.status(400).json({ error: "Invalid product category" });
  }

  next();
};

export default { validateProduct };
