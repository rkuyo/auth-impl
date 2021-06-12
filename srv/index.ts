import { config } from "./env"
import { app } from "./api"

const port = config.port

app.listen(port)
console.log(`listening on port ${port}`)
