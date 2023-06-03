import cors from "cors";
import express, { Application } from "express";
import userRoutes from "./app/modules/user/user.route";

const app: Application = express();

// usin cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes);

export default app;

// pattern
// MVC
// Moduler

// Route -> Controller -> service
