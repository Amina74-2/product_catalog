const { getAllProducts } = require("../models/products");

exports.viewCart = (req, res) => {
    const cart = req.session.cart || []; 
    const total = cart.reduce((sum, p) => sum + p.price, 0);  
    res.render("cart", { cart, total });  
  };
  
  exports.addToCart = (req, res) => {
    const product = getAllProducts().find(p => p.id === req.body.productId); 
    if (!req.session.cart) req.session.cart = [];  
    req.session.cart.push(product);  
    res.redirect("/cart");  
  };

  