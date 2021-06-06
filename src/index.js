// import all the necessary packages
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import DotEnv from "dotenv";
import todoRoutes from "routes/Todo";
import express from "express";

DotEnv.config();
// we are using port 8000
const port = process.env.PORT || 80;

const app = express();

// DB connection
mongoose
    .connect(process.env.CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => {
        console.log("CONNECTED TO DATABASE");
    });

app.use(cors());
// middleware to convert our request data into JSON format
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// include the todoRoutes
app.use("/api", todoRoutes);

// start the server in the port 8000
app.listen(port, () => {
    console.log(`Listening to http://localhost:${port}`);
});
