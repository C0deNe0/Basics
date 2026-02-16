import { error } from "node:console";
import { z } from "zod";
import { config } from "dotenv";
config();

//schema of env
const envSchema = z.object({
  PORT: z.coerce.number().optional(),
  JWT_SECRET: z.coerce.string(),
});

function createEnv(env: NodeJS.ProcessEnv) {
  const validationRes = envSchema.safeParse(env);

  if (!validationRes.success) throw new Error(validationRes.error.message);

  return validationRes.data;
}

export const env = createEnv(process.env);
