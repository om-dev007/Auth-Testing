import e from "express";
import cookieParser from "cookie-parser";
import router from "./routes/user.routes.js";
import cors from 'cors'

const app = e();

app.use(e.json());
app.use(cookieParser());
app.use(cors());
app.use("/api/auth", router)

export default app;
