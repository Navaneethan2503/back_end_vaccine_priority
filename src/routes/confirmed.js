//const { requireSignin, userMiddleware } = require("../common-middleware");
const { addConfirmed, getConfirmed } = require("../controller/confirmed");
const router = require("express").Router();

router.post("/addconfirmed", addConfirmed);
router.get("/getconfirmed", getConfirmed);


module.exports = router;