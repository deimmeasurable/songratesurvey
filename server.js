const Joi = require("joi");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
//this return a piece of middleware
app.use(express.json());

const db = require("./models");

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Cannot connect to the database", err);
    process.exit();
  });

var corsOptions = {
  origin: "http://localhost:3000/",
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "App running" });
});

app.get("/api/survey/:id", (req, res) => {
  res.send([]);
});
app.post("/api/createSurvey/", (req, res) => {
  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .required(),
    country: Joi.string()
      .min(3)
      .required(),
    email: Joi.string()
      .min(3)
      .required(),
    rock1: {
      r1_1: Joi.number()
        .integer()
        .min(1)
        .max(5),

      r1_2: Joi.number()
        .integer()
        .min(1)
        .max(5),

      r1_3: Joi.number()
        .integer()
        .min(1)
        .max(5),

      r1_4: Joi.number()
        .integer()
        .min(1)
        .max(5),
      comment: Joi.string()
        // .min(3)
        .max(500),
    },
    rock2: {
      r2_1: Joi.number()
        .integer()
        .min(1)
        .max(5),

      r2_2: Joi.number()
        .integer()
        .min(1)
        .max(5),

      r2_3: Joi.number()
        .integer()
        .min(1)
        .max(5),

      r2_4: Joi.number()
        .integer()
        .min(1)
        .max(5),
      comment: Joi.string()
        // .min(3)
        .max(500),
    },
    rock3: {
      r3_1: Joi.number()
        .integer()
        .min(1)
        .max(5),

      r3_2: Joi.number()
        .integer()
        .min(1)
        .max(5),

      r3_3: Joi.number()
        .integer()
        .min(1)
        .max(5),

      r3_4: Joi.number()
        .integer()
        .min(1)
        .max(5),
      comment: Joi.string()
        // .min(3)
        .max(500),
    },
    pop1: {
      p1_1: Joi.number()
        .integer()
        .min(1)
        .max(5),

      p1_2: Joi.number()
        .integer()
        .min(1)
        .max(5),

      p1_3: Joi.number()
        .integer()
        .min(1)
        .max(5),

      p1_4: Joi.number()
        .integer()
        .min(1)
        .max(5),
      comment: Joi.string()
        // .min(3)
        .max(500),
    },
    pop2: {
      p2_1: Joi.number()
        .integer()
        .min(1)
        .max(5),

      p2_2: Joi.number()
        .integer()
        .min(1)
        .max(5),

      p2_3: Joi.number()
        .integer()
        .min(1)
        .max(5),

      p2_4: Joi.number()
        .integer()
        .min(1)
        .max(5),
      comment: Joi.string()
        // .min(3)
        .max(500),
    },
    pop3: {
      p3_1: Joi.number()
        .integer()
        .min(1)
        .max(5),

      p3_2: Joi.number()
        .integer()
        .min(1)
        .max(5),

      p3_3: Joi.number()
        .integer()
        .min(1)
        .max(5),

      p3_4: Joi.number()
        .integer()
        .min(1)
        .max(5),
      comment: Joi.string()
        // .min(3)
        .max(500),
    },
    jazz1: {
      j1_1: Joi.number()
        .integer()
        .min(1)
        .max(5),

      j1_2: Joi.number()
        .integer()
        .min(1)
        .max(5),

      j1_3: Joi.number()
        .integer()
        .min(1)
        .max(5),

      j1_4: Joi.number()
        .integer()
        .min(1)
        .max(5),
      comment: Joi.string()
        // .min(3)
        .max(500),
    },
    jazz2: {
      j2_1: Joi.number()
        .integer()
        .min(1)
        .max(5),

      j2_2: Joi.number()
        .integer()
        .min(1)
        .max(5),

      j2_3: Joi.number()
        .integer()
        .min(1)
        .max(5),

      j2_4: Joi.number()
        .integer()
        .min(1)
        .max(5),
      comment: Joi.string()
        // .min(3)
        .max(500),
    },
    jazz3: {
      j3_1: Joi.number()
        .integer()
        .min(1)
        .max(4),

      j3_2: Joi.number()
        .integer()
        .min(1)
        .max(5),

      j3_3: Joi.number()
        .integer()
        .min(1)
        .max(5),

      j3_4: Joi.number()
        .integer()
        .min(1)
        .max(5),
      comment: Joi.string()
        // .min(3)
        .max(500),
    },
  });
  const result = schema.validate(req.body);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }
  const surveyRate = {
    name: req.body.name,
    country: req.body.country,
    email: req.body.email,
    rock1: req.body.rock1,
    rock2: req.body.rock2,
    rock3: req.body.rock3,
    pop1: req.body.pop1,
    pop2: req.body.pop2,
    pop3: req.body.pop3,
    jazz1: req.body.jazz1,
    jazz2: req.body.jazz2,
    jazz3: req.body.jazz3,
  };
  // surveyRate.push()
  res.send(surveyRate);
});

app.listen({ port: 8000 }, () => {
  console.log("====================================");
  console.log("Server is running on port 8000");
  console.log("====================================");
});
