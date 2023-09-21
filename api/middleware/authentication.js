const jwt = require("jsonwebtoken");

async function authenticate(req, res, next) {
  try {
    let token = req.header("Authorization");
    if (!token) res.status(202).json({ mesasage: "Acess Denied" });
    if (token.startsWith("Bearer ")) token = token.split(" ")[1];

    const verified = jwt.verify(token, process.env.SECRET_KEY);
    req.user = verified;
    next();
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
console.log("working");

module.exports = authenticate;
