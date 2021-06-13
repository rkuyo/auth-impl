import cors from "cors"
import express, { Router } from "express"
import user from "./user"

const app = express()
app.use(cors())
app.use(express.json())

const router = Router()
router.use("/user", user)

app.use(router)

export { app }
