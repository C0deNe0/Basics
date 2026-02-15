import { Router } from "express";
import { authLogin, authRegister } from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post("/login", authLogin);
authRouter.post("/register", authRegister);

export default authRouter;
