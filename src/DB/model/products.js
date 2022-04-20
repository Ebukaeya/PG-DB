/* import { sequelize } from "../index.js"; */
import { DataTypes, Sequelize } from "sequelize";


const sequelize = new Sequelize(process.env.PGDATABASE, process.env.PGUSER, process.env.PGPASSWORD, {
    host: "localhost",
    dialect: "postgres",
  });

const Product = new sequelize.define("product",
{
    "id": {
        primaryKey: true,
        type: DataTypes.STRING.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    "name": DataTypes.STRING,
    "category":DataTypes.STRING,
    "description": DataTypes.TEXT,
    "image": DataTypes.url,
    "price": DataTypes.FLOAT
}
)

export default Product