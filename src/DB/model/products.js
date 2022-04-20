/* import { sequelize } from "../index.js"; */
import { DataTypes, Sequelize } from "sequelize";


const sequelize = new Sequelize(process.env.PGDATABASE, process.env.PGUSER, process.env.PGPASSWORD, {
    host: "localhost",
    dialect: "postgres",
  });

const Product = sequelize.define("product",
{
    "id": {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    "name": DataTypes.STRING,
    "category":DataTypes.STRING,
    "description": DataTypes.TEXT,
    "image": DataTypes.STRING,
    "price": DataTypes.FLOAT
}
)

export default Product