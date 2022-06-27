const Joi = require("joi");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Survey = require("./models/survey.models");

const app = express();
//this return a piece of middleware
app.use(express.json());

const db = require("./models");

// mongodb+srv://Seun:zeus12345@survey.cbgdgar.mongodb.net/?retryWrites=true&w=majority

db.mongoose
  .connect("mongodb://localhost:27017/lyrics-rating", {
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

app.get("/api/displaysurvey",async (req, res) => {
  const listSurvey= await Survey.find();
  if(!listSurvey) res.status(404).send('This the own list of survey')
  res.send(listSurvey);
});
app.post("/api/createSurvey/", async (req, res) => {


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

    ratings: Joi.array().items(
      Joi.object(
        {
          genre:Joi.string()
          .min(3)
          .required(),
          comment: Joi.string()
          .min(3)
          .required(),
          rates:Joi.array().items(
            Joi.object(
              {
                genre:Joi.string()
                .min(3)
                .required(),
                track_Id:Joi.string()
                .min(3)
                .required(),
                rating:Joi.string()
                .min(1)
                .max(5)
    
              },
            )
           
          )         
        }
      )
    )
    
  });
  const { value, error } = schema.validate(req.body);
  console.log(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  const survey = new Survey({ ...value });
  const savedSurvey = await survey.save()


  res.send(savedSurvey);
});

app.listen({ port: 8000 }, () => {
  console.log("====================================");
  console.log("Server is running on port 8000");
  console.log("====================================");
});
