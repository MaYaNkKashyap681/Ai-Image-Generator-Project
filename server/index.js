const express = require('express')
const cors = require('cors')
const connectDb = require("./mongodb/connect.js");
const dotenv = require('dotenv')

//helps to pull our env varibles envs
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use('/api/v1/post', require('./routes/postRoutes'));
app.use('/api/v1/dallei', require('./routes/aiRoutes'));

app.get("/", async (req, res) => {
  res.send("Hello from our Ai ApP");
});

/* Starting the Server */
const startServer = async () => {
  try {
    connectDb("mongodb://localhost/aiimagedatabasex");
    app.listen(8000, () => {
      console.log("Server has started on port http://localhost:8000");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
