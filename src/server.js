import express from "express";
import router from "./services/products/index.js";
import dBConnet, { synDB } from "./DB/index.js";



const app = express();

const PORT = process.env.PORT;

app.use(express.json);
app.use("/products", router)

app.get("/", (req,res)=>{
    console.log(req);
    res.send("hi")
})

app.listen(PORT, () => {
  console.log("server on ", PORT);
  //dBConnet();
  // synDB()
});
