const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");


function isAdmin(req, res, next) {
  if (req.session.user && req.session.user.username === "admin" && req.session.user.password === "123456") {
    next(); 
  } else {
    res.redirect("/login");
  }
}


router.get("/dashboard", isAdmin, adminController.dashboard);
router.get("/add", isAdmin, adminController.addProductForm);
router.post("/add", isAdmin, adminController.addProduct);

module.exports = router;
