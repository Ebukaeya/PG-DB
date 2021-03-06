import express from "express";
import router from "./services/products/index.js";
import {dBConnet, synDB} from "./DB/index.js";
import cors from "cors";
import reviewROuter from "./services/reviews/index.js";

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use("/products", router);
app.use("/reviews", reviewROuter)

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(PORT, () => {
  console.log("server on ", PORT);
  dBConnet();
  synDB();
});
