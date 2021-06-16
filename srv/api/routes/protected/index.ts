import { Router } from "express"
import { authenticate } from "../../auth"
import { protectedHandler } from "./protected"

export { router as default }

const router = Router()

router.get("/", authenticate, protectedHandler)
