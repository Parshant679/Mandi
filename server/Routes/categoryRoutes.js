const router = require("express").Router();
const categoryCtrl = require("../controller/categoryCtrl");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
router
  .route("/category")
  .get(categoryCtrl.getCategories)
  .post(auth, admin, categoryCtrl.createCategory);

router
  .route("/cateory/:id")
  .delete(auth, admin, categoryCtrl.deleteCategory)
  .put(auth, admin, categoryCtrl.updateCategory);

module.exports = router;
