const router = require("express").Router();
const produtCtrl = require("../controller/productCtrl");
router
  .route("/products")
  .get(produtCtrl.getProduct)
  .post(produtCtrl.addProduct);

router
  .route("/products/:id")
  .delete(produtCtrl.deleteProduct)
  .put(produtCtrl.updateProduct);

module.exports = router;
