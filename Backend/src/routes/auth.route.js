import {Router} from "express"
import { registerHandler, loginHandler, generateAccessTokenHandler } from "../controllers/auth.controller.js"

const authRouter = Router()


authRouter.post("/register", registerHandler)

authRouter.post("/login",loginHandler)

authRouter.get("/generateAccessToken",  generateAccessTokenHandler)


export default authRouter