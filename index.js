import dotenv, { config } from "dotenv";

import connectdb from "./src/db/index.js";

dotenv.config({
    path :'./.env'
})

connectdb()

