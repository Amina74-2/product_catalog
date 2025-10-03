const express = require("express");
const router = express.Router();
const { getUsers, addUser } = require("../models/users");


router.get("/login", (req, res) => res.render("login"));
router.get("/register", (req, res) => res.render("register"));
router.get("/logout", (req, res) => {
    req.session.user = null;  
    req.session.cart = null;  
    res.render("logout");  
  });
  
  

  router.post("/login", (req, res) => {
    const { username, password } = req.body;
    const user = getUsers().find(u => u.username === username && u.password === password);
    if (user) {
      req.session.user = user;
      req.session.cart = null;  
      res.redirect("/");  
    } else {
      res.send("Identifiants invalides.");
    }
  });
  

router.post("/register", (req, res) => {
  const { username, password } = req.body;
  addUser({ username, password });
  res.redirect("/login");
});

module.exports = router;

  