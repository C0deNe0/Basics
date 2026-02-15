import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import { loginSchema, registerSchema } from "../types";

export async function authRegister(req: Request, res: Response) {
  try {
    const { username, email, password } = req.body;
    //to check is email already exists in db
    var user = registerSchema.parse(req.body);

    const hashedPassword = await bcrypt.hash(password, 10);
    res.status(201).json({ message: "user created successfully" });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
    });
  }
}

export function authLogin(req: Request, res: Response) {
  const { username, password } = req.body;
  //   console.log(`username: ${username}, \npassword: ${password}`);

  res.send("Login successful");
}
