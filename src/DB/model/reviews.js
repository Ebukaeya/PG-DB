import sequelize from "../index.js";
import { DataTypes } from "sequelize";

const Review = sequelize.define("review", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  category: DataTypes.STRING,
  description: DataTypes.TEXT,
  image: DataTypes.STRING,
  price: DataTypes.FLOAT,
});

export default Review;
