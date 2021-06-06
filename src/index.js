// import all the necessary packages
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import DotEnv from 'dotenv';
import todoRoutes from 'routes/Todo'
import express from "express";

DotEnv.config();
// we are using port 8000
const port = 8000;

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

// middleware for cors to allow cross origin resource sharing
const corsOptions = {
  origin: 'http://localhost:3000',
}
const configuredCors = cors(corsOptions);

app.use(configuredCors);
// middleware to convert our request data into JSON format
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// include the todoRoutes
app.use("/api", todoRoutes);

// start the server in the port 8000
app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
