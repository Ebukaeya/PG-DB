import express from "express";
import model from "../../DB/model/index.js";

const { Product, Review } = model;

const reviewROuter = express.Router();

reviewROuter.post("/:id", async (req, res, next) => {
  try {
    let product = await Product.findByPk(req.params.id);
    let text = req.body.text;
    let username = req.body.username;

    let review = await Review.create({
      text,
      username,
      productId: req.params.id,
    });

    res.send(review);
  } catch (error) {
    console.log(error);
  }
});

reviewROuter.get("/", async (req, res, next) => {
  try {
    let review = await Review.findAll({
      include: Product,
    });
    res.send(review);
  } catch (error) {
    console.log(error);
  }
});



reviewROuter.get("/:id", async (req, res, next) => {
  try {
    let review = await Review.findByPk(req.params.id);
    res.send(review);
  } catch (error) {
    console.log(error);
  }
});

reviewROuter.put("/:id", async (req, res, next) => {
  try {
    let updateField = await Review.update(
      { text: "i love chineke1" },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.send(updateField);
  } catch (error) {
    console.log(error);
  }
});

reviewROuter.delete("/:id", async (req, res, next) => {
  try {
    let updateField = await Review.destroy(
      {
        where: {
          id: req.params.id,
        },
      }
    );
    updateField? res.status(200).send("updateField"): res.send("record not found")
  } catch (error) {
    console.log(error);
  }
});

export default reviewROuter;
