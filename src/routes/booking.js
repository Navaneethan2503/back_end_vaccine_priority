//const { requireSignin, userMiddleware } = require("../common-middleware");
const { addBooking, getBooking } = require("../controller/booking");
const router = require("express").Router();

router.post("/addbooking", addBooking);
router.get("/getbooking", getBooking);


module.exports = router;