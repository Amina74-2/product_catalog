const express = require("express");
const path = require("path");
const session = require("express-session");
const bodyParser = require("body-parser");

const app = express();


app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: "secret123",
    resave: false,
    saveUninitialized: false
}));
app.use(session({
    secret: "secret123",
    resave: false,
    saveUninitialized: false
  }));
  
  
  app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
  });
  

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use("/", require("./routes/index"));
app.use("/", require("./routes/auth"));
app.use("/", require("./routes/cart"));
app.use("/admin", require("./routes/admin"));

app.listen(3000, () => console.log("Server started on http://localhost:3000"));
