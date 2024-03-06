const userCtrl = require("../controller/userCtrl");
const router = require("express").Router();
router.get("/", (req, res) => {
  res.send("welcome to server ... ");
});
router.post("/login", userCtrl.login);
router.post("/register", userCtrl.register);
router.post("/refreshtoken", userCtrl.refreshtoken);
module.exports = router;
