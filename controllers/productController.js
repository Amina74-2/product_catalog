const { getAllProducts } = require("../models/products");

exports.showHome = (req, res) => {
  const products = getAllProducts();
  const category = req.query.category;
  const min = req.query.min;
  const max = req.query.max;

  let filtered = products;

  if (category) filtered = filtered.filter(p => p.category === category);
  if (min) filtered = filtered.filter(p => p.price >= parseFloat(min));
  if (max) filtered = filtered.filter(p => p.price <= parseFloat(max));

  res.render("index", { products: filtered, user: req.session.user });
};
