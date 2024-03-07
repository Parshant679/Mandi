const Product = require("../models/productModel");

const ProdutCtrl = {
  getProduct: async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  addProduct: async (req, res) => {
    try {
      const {
        product_id,
        title,
        price,
        descrition,
        content,
        images,
        category,
      } = req.body;
      if (!images) return res.status(404).json({ msg: "please add Images" });

      const product = await Product.findById(product_id);
      if (product)
        return res.status(200).json({ msg: "product already exists" });

      const newProduct = new Product({
        product_id,
        title: title.toLowerCase(),
        price,
        descrition,
        content,
        images,
        category,
      });
      await newProduct.save();
      res.json({ msg: "product added successfully" });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.json({ msg: "product deleted successfully" });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  updateProduct: async (req, res) => {
    try {
      const { title, price, descrition, content, images, category } = req.body;

      await Product.findOneAndUpdate(
        { _id: req.params.id },
        {
          title: title.toLowerCase(),
          price,
          descrition,
          content,
          images,
          category,
        }
      );
      res.json({ msg: "Product updated successfully" });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = ProdutCtrl;
