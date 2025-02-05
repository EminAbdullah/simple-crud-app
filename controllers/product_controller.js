const Product = require("../models/product_model.js");


exports.getProducts = async (req, res) => {

    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


exports.getProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.postProducts= async (req, res) => {

    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

}


exports.updateProduct= async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
            return res.status(400).json({
                message: "Product not found"
            })
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


exports.deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {

        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });

        }

        res.status(200).json({ message: "Product deleted successfully" });

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}