const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const secretKey = "secretkey";
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // You can implement your own logic to check the credentials here
  if (email === "test@example.com" && password === "password1") {
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
