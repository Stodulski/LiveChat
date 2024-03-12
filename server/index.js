import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";

const app = express();

// setting
app.set("PORT", process.env.PORT || 3000);

// middleware
app.use(cors());
app.use(helmet());
app.use(cookieParser(process.env.SECRET || "secret"));
app.use(express.urlencoded({ extended: false }));

// serving static files
app.use(express.static("./server/public"));

// template engine
app.set("view engine", "pug");

import mainRoutes from "./routes/mainRoutes.js";
import authRoutes from "./routes/authRoutes.js";

// routes
app.use(mainRoutes)
app.use(authRoutes)

export default app;