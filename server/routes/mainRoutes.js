import {Router} from "express"

const router = Router()

import { authController } from "../controllers/auth.js";
import { chatController } from "../controllers/chat.js";

router.get('/', authController.verifyToken, chatController.renderMessage)

export default router;