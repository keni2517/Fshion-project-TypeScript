import express from "express";
const userRoutes = express.Router();
import { upload } from "../helpers/imageUpload";
import { verifyToken } from "../helpers/verifyToken";
import {
  registerUser,
  loginUser,
  getProfile,
  changePassword,
  updateProfile,
} from "../controller/user.controller";

userRoutes.post("/", upload.single("profileImage"), registerUser);
userRoutes.post("/login", loginUser);
userRoutes.get("/get", verifyToken, getProfile);
userRoutes.put("/change-password", verifyToken, changePassword);
userRoutes.put("/update", verifyToken, upload.single("profileImage"), updateProfile);

export default userRoutes;
