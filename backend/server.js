import app from "./src/app.js";
import { connectDb } from "./src/db/db.js";
import dotenv from 'dotenv'
dotenv.config()

connectDb()
const port = process.env.PORT;

app.listen(port, () => {
    console.log("Server is running on 3000...")
})