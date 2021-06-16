import cors from "cors"
import express, { Router } from "express"
import user from "./routes/user"
import protectedRoute from "./routes/protected"

const app = express()
app.use(cors())
app.use(express.json())

const router = Router()
router.use("/user", user)
router.use("/protected", protectedRoute)

app.use(router)

export { app }
