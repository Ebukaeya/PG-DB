import express from "express";
import models from "../../DB/model/index.js";
import { Op,fn,col } from "sequelize";

const { Product, Review } = models;
console.log(models);

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    let product = await Product.create({
      name: req.body.name,
      category: req.body.category,
      description: req.body.description,
      image: req.body.image,
      price: req.body.price,
    });
    res.send(product.id);
  } catch (error) {
    console.log(error);
  }
});
/* route with search parameters. */
router.get("/", async (req, res, next) => {
  try {
    const product = await Product.findAll({
      include: Review,
      where: {
        [Op.or]: [
          {
            name: { [Op.iLike]: `%${req.query.name}%` },
          },
          {
            description: { [Op.iLike]: `%${req.query.description}%` },
          },
        ],
        
      },
     /*  order:  [[fn('lower', col('name')), "desc"]], */
     order:[["price","desc"]]

    });

    res.send(product);
  } catch (error) {
    console.log(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll({ include: Review });
    res.send(products);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    let product = await Product.findByPk(req.params.id);
    console.log(product);
    res.send(product);
  } catch (error) {}
});

router.put("/:id", async (req, res, next) => {
  try {
    let product = await Product.findByPk(req.params.id);
    console.log(product);
    let ret = await Product.update(
      { name: "Eya" },
      {
        where: {
          id: product.id,
        },
      }
    );
    console.log(ret);
    res.send(ret);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    let result = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (result) {
      res.send("destroyed");
    }
  } catch (error) {
    console.log(error);
  }
});
export default router;
