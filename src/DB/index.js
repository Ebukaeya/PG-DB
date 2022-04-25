import { Sequelize } from "sequelize";

/* make sure u instantaite one instance of the sequuelize obj. */

/* initiate the sequelize object ,
 * connect todb
 * creat funtion to syn tables
 */
const pass = process.env.PGPASSWORD;

 const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  pass,
  {
    host: "localhost",
    dialect: "postgres",
  }
);

export const dBConnet = async () => {
  try {
    await sequelize.authenticate();
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
};

export const synDB = async () => {
  try {
    await sequelize.sync(/* {force:true} */);
    console.log("All models were synchronized successfully.");
    /* Product.sync() */
  } catch (error) {
    console.log(error);
  }
};

export default sequelize;
