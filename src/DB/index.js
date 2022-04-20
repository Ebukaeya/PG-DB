import { Sequelize } from "sequelize";
import Product from "./model/products.js";

const pass = process.env.PGPASSWORD


export const sequelize = new Sequelize(process.env.PGDATABASE, process.env.PGUSER, pass, {
  host: "localhost",
  dialect: "postgres",
});

const dBConnet = async () => {
  try {
      await sequelize.authenticate();
      console.log("db connected")
  } catch (error) {
      console.log(error);
  }
};

export const synDB = async()=>{


}

export default dBConnet