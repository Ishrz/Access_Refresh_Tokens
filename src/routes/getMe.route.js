import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";


const getMeRouter = Router();


getMeRouter.get("/", authMiddleware ,(req, res) => {

    res.send({
        message: "Get me route is working",
        success: true,
        user: req.user
    });

})

export default getMeRouter;