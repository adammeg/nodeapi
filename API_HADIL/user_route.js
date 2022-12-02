const express = require("express");
const router = express.Router();
const userController = require("./user_model");

router.get("/allusers",userController.getUsers)
router.post("/adduser",userController.addUser)
router.post("/updateuser/id",userController.updateUser)
router.post("/deleteuser/id",userController.deleteUser)

module.exports = router;