import express, { Router } from "express";
require('dotenv').config();
import serverless from "serverless-http";
import mongoose from "mongoose";

const api = express();

const router = Router();
router.get("/hello", (req, res) => res.send("Hello World!"));

api.use("/api/", router);

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedToology: true});
export const handler = serverless(api);