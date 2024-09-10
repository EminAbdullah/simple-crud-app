const express = require("express");
const router = express.Router();
const productController = require("../controllers/product_controller.js");




router.get("/:id", productController.getProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

router.get("/", productController.getProducts);

router.post("/", productController.postProducts);

module.exports= router;