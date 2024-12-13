import express, { Request, Response } from "express";
import { generate } from "@onboarding/rando";
import { logger } from "@onboarding/logger";

const app = express();
const PORT = process.env.PORT || 3101;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  logger.info("Hello, there!")
  res.send(`Hello, ${generate()}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
