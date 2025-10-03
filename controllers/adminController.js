const { getAllProducts, saveProducts } = require("../models/products");

exports.dashboard = (req, res) => {
  if (!req.session.user) return res.send("Access denied");
  res.render("admin/dashboard", { products: getAllProducts() });
};

exports.addProductForm = (req, res) => {
  res.render("admin/addProduct");
};

exports.addProduct = (req, res) => {
  const products = getAllProducts();
  const newProduct = {
    id: String(Date.now()),
    name: req.body.name,
    price: parseFloat(req.body.price),
    category: req.body.category,
    image: req.body.image
  };
  products.push(newProduct);
  saveProducts(products);
  res.redirect("/admin/dashboard");
};