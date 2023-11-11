import express from "express";
import { getForm, postForm } from "../controllers/posts.js";

// const app = express();
const router = express.Router()

router.get('/', getForm)

router.post('/', postForm)

export default router