import e from "express";
import cookieParser from "cookie-parser";
import router from "./routes/user.routes.js";
import cors from "cors";


const app = e();

app.use(cors({
    origin: "https://backend-auth-testing.vercel.app/",
    credentials: true
}));
app.use(e.json());
app.use(cookieParser());
app.use("/api/auth", router)

export default app;
