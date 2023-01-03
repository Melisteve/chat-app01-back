const {
  addMessages,
  getAllMessage,
} = require("../controllers/messagesController");

const router = require("express").Router();

router.post("/addmsg/", addMessages);
router.post("/getmsg/", getAllMessage);

module.exports = router;
