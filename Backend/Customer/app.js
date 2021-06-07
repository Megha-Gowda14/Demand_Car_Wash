//import required modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
//const cors = require("cors");

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Car_Wash API with Swagger',
    version: '1.0.0',
  },
  description:
      'This is a simple CRUD API application made with Express and documented with Swagger',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: 'JSONPlaceholder',
      url: 'https://jsonplaceholder.typicode.com',
    },
  servers: [
    {
      url:"http://localhost:4001",
      description: 'Customer server',
    },
  ],
};


const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./services/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const authRoutes = require("./services/authServices");
const accountRoutes = require("./services/accountServices");
//const orderRoutes = require("./services/orderServices");

//port connection
const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log("Listening on Customer MS Port: " + port);
});

//app.use(cors(corsOptions));

//Database Connection
mongoose.connect(
    `mongodb+srv://Megha:Meghagtg0904@cluster0.4bvwy.mongodb.net/Customer?retryWrites=true&w=majority`,
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

//Every request from customer route goes through this url : /customer
app.use("/customer/auth", authRoutes);
app.use("/customer/account", accountRoutes);
//app.use("/customer/order", orderRoutes);

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
