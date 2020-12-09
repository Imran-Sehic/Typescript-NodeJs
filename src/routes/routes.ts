import { Router } from 'express';
import todoRouter from "./todos";

const router = Router();

router.use(todoRouter);

export default router;