import {Router} from "express"
import { registerHandler, loginHandler } from "../controllers/auth.controller.js"

const authRouter = Router()


authRouter.post("/register", registerHandler)

authRouter.get("/login", loginHandler)


export default authRouter