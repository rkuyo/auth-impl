import express from "express"
import { config } from "./env"

const app = express()

const port = config.port
app.listen(port)
console.log(`listening on port ${port}`)
