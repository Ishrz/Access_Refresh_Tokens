import { Router } from "express";
import {
  registerHandler,
  loginHandler,
  generateAccessTokenHandler,
} from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const authRouter = Router();

//getMe route & Handler
authRouter.get("/getMe", authMiddleware, async (req, res) => {
  try {
    return res.status(200).json({
      message: "LoggedIn user fetched successfully",
      success: true,
      user: req.user,
    });
  } catch (error) {
    console.log("Error in getMe handler", error);
    return res.status(401).json({
      message: "Error in Fecthing logged in User",
      success: false,
      error: error.message,
    });
  }
});

authRouter.post("/register", registerHandler);

authRouter.post("/login", loginHandler);

authRouter.get("/generateAccessToken", generateAccessTokenHandler);

export default authRouter;
