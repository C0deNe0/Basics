import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { loginSchema, registerSchema } from "../types";
import { readData } from "../utils/filedb";
import { generateToken } from "../utils/generateToken";

export async function authRegister(req: Request, res: Response) {
  try {
    const result = registerSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: result.error.message,
      });
    }

    const { email, password } = result.data;

    const db = await readData();
    const userExists = db.users.find((user: any) => user.email === email);
    if (userExists) {
      return res.status(400).json({
        message: "user already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      id: Date.now(),
      email,
      password: hashedPassword,
    };

    db.users.push(newUser);
    await db.writeData();

    res.status(201).json({ message: "user created successfully", email });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
    });
  }
}

export async function authLogin(req: Request, res: Response) {
  try {
    const result = loginSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        message: result.error.message,
      });

      const { email, password } = req.body;

      const db = await readData();
      const user = db.users.find((user: any) => user.email === email);
      if (!user) {
        return res.status(400).json({
          message: "user not found",
        });
      }

      //pass check
      const pass = await bcrypt.compare(password, user.password);
      if (!pass) {
        return res.status(400).json({
          message: "Invalid cred",
        });
      }

      const token = generateToken(user.id, "1h");

      res.status(200).json({
        message: "login successfull",
        token,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
    });
  }
}
