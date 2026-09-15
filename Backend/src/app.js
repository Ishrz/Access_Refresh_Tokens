import express from "express"
import authRouter from "./routes/auth.route.js"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import cors from "cors"
import homeRouter from "./routes/home.route.js"

const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}))


app.use("/api/v1/auth", authRouter)

app.use("/api/v1/home", homeRouter)



export default app