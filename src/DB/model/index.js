/* define relation betwwen models or tables and export them as one*/
import Product from "./products.js";
import Review from "./reviews.js";



Product.hasMany(Review)
Review.belongsTo(Product)



export default {
  Product, /* Product:Product */
  Review,
};
