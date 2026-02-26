import e from "express";
import cookieParser from "cookie-parser";
import router from "./routes/user.routes.js";
import cors from 'cors'
import helmet from 'helmet'

const app = e();

app.use(e.json());
app.use(cookieParser());
app.use(helmet())
// app.use(cors({
//     origin: "https://backend-auth-testing.vercel.app/",
//     credentials: true
// }));

const allowedOrigins = [
  "http://localhost:5173",
  "https://backend-auth-testing.vercel.app/"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
}));

app.use("/api/auth", router)

export default app;
