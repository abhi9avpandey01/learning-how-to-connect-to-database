import dotenv, { config } from "dotenv";
import express from "express";
import connectdb from "../src/db/index.js";

const app = express();

dotenv.config({
    path :'./.env'
})

connectdb();

const port = process.env.PORT || 4000;

app.use("/", async(req,res) => {
    res.json({
        message: "API IS WORKING"
    })
});

app.listen(prompt, () => {
    console.log(`SERVER RUNNING ON PORT": ${port}`);
});


