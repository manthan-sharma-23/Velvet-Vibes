const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
const dotenv = require("dotenv");
const { fileURLToPath } = require("url");
const { error } = require("console");

const connectToMongoDB = require("./db.js");

//ROutes
const authRoutes = require("./routes/auth.js");
const productRoutes = require("./routes/products.js");
const cartRoutes = require("./routes/cart.js");

/*  CONFIGURATIONS  */
dotenv.config();
const BASE_URL = process.env.BASE_URL;

const app = express();
app.use(express.json());
const allowedOrigins = [BASE_URL];
app.use(
  cors({
    origin: allowedOrigins,
  })
);

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
const ___filename = fileURLToPath(require("url").pathToFileURL(__filename));
const ___dirname = path.dirname(___filename);
app.use("/assets", express.static(path.join(___dirname, "public/assets")));
// bodyParser.urlencoded({ extended: false });
app.use(express.static("public"));
app.use(express.json({ limit: "30mb" })); // Adjust the limit as needed
app.use(express.urlencoded({ extended: true, limit: "30mb" }));
connectToMongoDB();

port = process.env.PORT || 5000;

//routes
app.get("/", (req, res) => {
  res.status(201).send("Welcome to Velvet Vibes API please redirect to respected ports !");
});

app.use("/auth", authRoutes);
app.use("/product", productRoutes);
app.use("/cart", cartRoutes);

app.listen(port, () => {
  console.log(`Server listening on Port ${port}`);
});
