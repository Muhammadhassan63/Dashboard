const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
const { sha512 } = require("js-sha512");
const secretKey = "secretkey";
const PORT = 8080;
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(cors());
app.use(express.json());
const Cookies = require('js-cookie');



app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Hash the email and password using SHA-512
  const hashedEmail = sha512(email);
  const hashedPassword = sha512(password);
  

  // You can implement your own logic to check the credentials here
  if (hashedEmail === "1" && hashedPassword === "1234") {
  // if(email==="1" && password === "1234"){
    const user = { email: email };
    const token = jwt.sign({ user }, secretKey, { expiresIn: "1hr" });
    Cookies.set('adminEmail', email);
    Cookies.set('adminPassword', password);

    res.json({ token });
    
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

function authenticateToken(req, res, next) {
  const token = req.header("Authorization")?.split(" ")[1];

  if (token) {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.sendStatus(403);
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } else {
    res.send('error')
    res.sendStatus(401);
  }
}

app.get("/home", authenticateToken, (req, res) => {
  res.json({ message: "Welcome to the protected route!", user: req.user });
});

app.get("/setting", authenticateToken, (req, res) => {
    res.json({ message: "Welcome to the protected route!", user: req.user });
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
