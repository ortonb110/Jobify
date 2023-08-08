import { readFile } from "fs/promises";

import dotenv from "dotenv";
dotenv.config();
import Job from "./models/Job.js";
import connectDB from "./db/connect.js";



const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        await Job.deleteMany();
        const jsonProduct = JSON.parse(await readFile(new URL('./Mock-data.json', import.meta.url)))
        await Job.create(jsonProduct)
        console.log('Success');
        process.exit(0);
    } catch (error) {
        console.log(error);
    }
}


start()