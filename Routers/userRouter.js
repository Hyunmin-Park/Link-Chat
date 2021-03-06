import express from "express";
import {
  changePassword,
  editProfile,
  userDetail,
  users,
} from "../Controllers/userController";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.home, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
