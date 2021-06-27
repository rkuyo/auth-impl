import { Router } from "express"
import { authenticate } from "../../auth"
import { resource } from "./protected"

export { router as default }

const router = Router()

router.get("/", authenticate, resource)
