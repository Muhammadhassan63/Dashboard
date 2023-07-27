const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
const { sha512 } = require("js-sha512");
const secretKey = "secretkey";
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Hash the email and password using SHA-512
  const hashedEmail = sha512(email);
  const hashedPassword = sha512(password);
  

  // You can implement your own logic to check the credentials here
  if (hashedEmail === "ab901d0112b7f85a9520651cc01864dc60620f74dd92a95db1f199fa4e579f3ae1db2d33cb7ce315e9d87cbc40f275a625b875810f3e229c4eb75241803334c0" && hashedPassword === "c9728f839e5d279f357e81a097df6fcad9d89b319060a3c1aac889c96ab2ad229bdfde0dce430714ac53b7f82ebb1da524b22be98eef7205653f4649d4757599") {
    const user = { email: email };
    const token = jwt.sign({ user }, secretKey, { expiresIn: "100s" });
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
