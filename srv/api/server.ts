import cors from "cors"
import express, { Router } from "express"
import resource from "./routes/resource"
import user from "./routes/user"

const app = express()
app.use(cors())
app.use(express.json())

const router = Router()
router.use("/user", user)
router.use("/resource", resource)

app.use(router)

export { app }
