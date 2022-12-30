
const express = require("express")
const router = express.Router()

const {renderIndexPage,addUser,getAllUser, updateUser}=require("../Controllers/user-controller")

router.get("/index",renderIndexPage)

router.post("/index", addUser)

router.get("/get-all-users", getAllUser)

router.put("/update-user/:id",updateUser )


module.exports=router