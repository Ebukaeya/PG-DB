
import { Sequelize } from "sequelize";

const pass = process.env.PGPASSWORD


const sequelize = new Sequelize(process.env.PGDATABASE, process.env.PGUSER, pass, {
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

export default dBConnet