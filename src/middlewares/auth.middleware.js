import User from "../models/user.model.js";
import jwt from "jsonwebtoken";


export const authMiddleware = async(req, res, next) => {
  try {

    const accessToken = req.cookies.accessToken;

  if (!accessToken) {
    return res.status(401).json({
      message: "Unauthorized request: Access token is missing",
      success: false,
    });
  }

  const decoded = await jwt.verify(accessToken, process.env.AcCESS_TOKEN_SECRET)

  if(!decoded || !decoded.id) {
    return res.status(401).json({
      message: "Unauthorized request: Invalid access token",
      success: false,
    });
  }

  const user = await User.findById(decoded.id).select("-password")

  if (!user) {
    return res.status(404).json({
      message: "Unauthorized request: User not found",
      success: false,
    });
  }

  req.user = user

  next()


  
    
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized request: Invalid or expired access token",
      success: false,
    });
  }


};
