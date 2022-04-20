import express from "express";
import dBConnet from "./DB/index.js";

const app = express()

console.log(process.env.PGPASSWORD);

const PORT = process.env.PORT
console.log(PORT);

app.use(express.json)





app.listen(PORT,()=>{
    console.log("server on ",PORT)
    dBConnet();
})