const Category = require("../models/categoryModel");

const categoryCtrl = {
  getCategories: async (req, res) => {
    try {
      const categories = await Category.find();
      res.json(categories);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createCategory: async (req, res) => {
    const { name } = req.body;
    const category = await Category.findOne({ name });
    if (category)
      return res.status(400).json({ msg: "category already exist" });
    const newCategory = new Category({ name });
    await newCategory.save();
    res.status(400).json({ msg: "new category Added" });
  },
  deleteCategory: async (req, res) => {
    try {
      await Category.findByIdAndDelete(req.params.id);
      res.json({ msg: "category deleted" });
    } catch (err) {
      return res.status(400).json({ msg: err.message });
    }
  },
  updateCategory: async (req, res) => {
    try {
      await Category.findByIdAndUpdate(req.params.id, req.body);
      res.json({ msg: "category updated" });
    } catch (err) {
      return res.status(400).json({ msg: err.message });
    }
  },
};

module.exports = categoryCtrl;
