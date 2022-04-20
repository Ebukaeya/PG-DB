import { Sequelize } from "sequelize";
import Product from "./model/products.js";

/* initiate the sequelize object , 
 * connect todb
* creat funtion to syn tables
*/
const pass = process.env.PGPASSWORD;

export const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  pass,
  {
    host: "localhost",
    dialect: "postgres",
  }
);

const dBConnet = async () => {
  try {
    await sequelize.authenticate();
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
};

export const synDB = async () => {
  try {
   // sequelize.sync().then(console.log("syncs"));
   Product.sync()
  } catch (error) {
    console.log(error);
  }
};

export default dBConnet;
