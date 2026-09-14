import express from "express"
import authRouter from "./routes/auth.route.js"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import getMeRouter from "./routes/getMe.route.js"


const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())


app.use("/api/v1/auth", authRouter)

app.use("/api/v1/me", getMeRouter)



export default app