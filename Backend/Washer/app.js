//import required modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//const cors = require("cors");

const authRoutes = require("./services/authServices");
const accountRoutes = require("./services/accountServices");
const orderRoutes = require("./services/orderServices");

//Port Connection
const port = process.env.PORT || 4002;
app.listen(port, () => {
  console.log("Listening on Washer MS Port: " + port);
});


//app.use(cors(corsOptions));

mongoose.connect(
    `mongodb+srv://Megha:Meghagtg0904@cluster0.4bvwy.mongodb.net/Washer?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .catch((err) => {
    console.log("Database Connection Error: " + err);
  });
let db = mongoose.connection;

//To check Database Connection
db.once("open", function () {
  console.log("Connected to MongoDb Database");
});

app.use(bodyParser.urlencoded({ extended: false }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

//For preventing CORS ERRORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

//Every request from admin route goes through this url : /admin
app.use("/washer/auth", authRoutes);
app.use("/washer/account", accountRoutes);
app.use("/washer/orders", orderRoutes);

//Error Handling
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});


module.exports = app;
