import jwt from "jsonwebtoken";
import { env } from "../env";

export const generateToken = (id: string, expiry: any) => {
  return jwt.sign({ id }, env.JWT_SECRET, {
    expiresIn: expiry,
  });
};
