const express = require("express");
const app = express();
const mongoose = require('mongoose');
const Product = require("./models/product_model.js");
const productRoute = require("./routes/product_route.js");

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use("/api/products",productRoute);


app.get("/", (req, res) => {
    res.send("Hello")
});

// app.get("/api/products", async (req, res) => {

//     try {
//         const products = await Product.find({});
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         })
//     }
// });

// app.get("/api/products/:id", async (req, res) => {
//     const id = req.params.id;
//     try {
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         })
//     }
// });

// app.post("/api/products", async (req, res) => {

//     try {
//         const product = await Product.create(req.body);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         })
//     }

// });

//update
// app.put("/api/products/:id", async (req, res) => {
//     const id = req.params.id;
//     try {
//         const product = await Product.findByIdAndUpdate(id, req.body);

//         if (!product) {
//             return res.status(400).json({
//                 message: "Product not found"
//             })
//         }

//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);

//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         })
//     }
// });

//delete 
// app.delete("/api/products/:id", async (req, res) => {
//     const id = req.params.id;
//     try {

//         const product = await Product.findByIdAndDelete(id);

//         if (!product) {
//             return res.status(404).json({ message: "Product not found" });

//         }

//         res.status(200).json({ message: "Product deleted successfully" });

//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         })
//     }
// });


mongoose.connect('mongodb://localhost:27017/deneme')
    .then(() => {
        console.log('Connected!')
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch(() => {
        console.log('Connection Failed!')
    });