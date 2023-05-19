'use strict'
const controller=require("../controller/User")
module.exports=function (user) {
    user.route("/user").get(controller.index)
    user.route("/addUser").get(controller.addUser)
    user.route("/prossAdd").post(controller.prossAdd)
    user.route("/user/:userId").get(controller.deleteUser)
    user.route("/edit/:id").get(controller.editUser)
    user.route("/updateUser").put(controller.updateUser)
}