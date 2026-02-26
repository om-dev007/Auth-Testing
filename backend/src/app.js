import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./routes/user.routes.js";

const app = express();

// ✅ production frontend domain (NO slash)
const FRONTEND_URL = "https://backend-auth-testing.vercel.app";

// ✅ CORS (stable config)
app.use(cors({
  origin: FRONTEND_URL,
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/auth", router);

export default app;