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

app.get("/api/displaySurvey/:name", (req, res) => {
  const listSurvey=surveyRate.find(c=> c.name===(req.params.name));
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

      
    ratings: [
      // rock 1 start
      {
        genre:Joi.string()
        .min(3)
        .required(),
        comment: Joi.string()
        .min(3)
        .required(),
        ratings:[
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
          }
        ]
      },
      // end of rock 1
      
        {
          //rock 2 start
          genre:Joi.string()
          .min(3)
          .required(),
          comment: Joi.string()
          .min(3)
          .required(),
          ratings:[
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
            .required(),
            },
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
              .required(),
            }
          ] 
      },
      // rock 2 ending
      {
        //rock 3 start
        genre:Joi.string()
        .min(3)
        .required(),
        comment: Joi.string()
        .min(3)
        .required(),
        ratings:[
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
            .required(),
          },
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
            .required(), 
          },
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
          .required(),
          },
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
            .required(),
          }
        ]

      },
      //end of rock 3
      {
        //pop 1 start
        genre:Joi.string()
        .min(3)
        .required(),
        comment: Joi.string()
        .min(3)
        .required(),
        ratings:[
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
            .required(),
          },
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
            .required(),
          },
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
          .required(),
          },
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
            .required(),
          }
        ]

      },
      // ending of pop1
      {
       // pop 2 start 
        genre:Joi.string()
        .min(3)
        .required(),
        comment: Joi.string()
        .min(3)
        .required(),
        ratings:[
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
            .required(),

          },
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
            .required(),
          },
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
          .required(),
          },
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
            .required(),
          }
        ]

      },
      //end of pop2
      {
        // pop 3 start
        genre:Joi.string()
        .min(3)
        .required(),
        comment: Joi.string()
        .min(3)
        .required(),
        ratings:[
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
            .required(),
          },
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
            .required(), 
          },
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
          .required(),
          },
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
            .required(), 
          }
        ]

      },
      //end of pop3
      
        {
          // jazz 1 start
          genre:Joi.string()
          .min(3)
          .required(),
          comment: Joi.string()
          .min(3)
          .required(),
          ratings:[
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
              .required(),
            },
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
              .required(),
            },
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
            .required(),
            },
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
              .required(), 
            }
          ]
      },
      //end of jazz 1
      {
        // jazz 2 start
        genre:Joi.string()
        .min(3)
        .required(),
        comment: Joi.string()
        .min(3)
        .required(),
        ratings:[
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
            .required(),
          },
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
            .required(),
          },
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
          .required(),
          },
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
            .required(), 
          }
        ]

      },
      //end of jazz2
      {
        // jazz 3 start
        genre:Joi.string()
        .min(3)
        .required(),
        comment: Joi.string()
        .min(3)
        .required(),
        ratings:[
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
            .required(),

          },
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
            .required(),
          },
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
          .required(),
          },
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
            .required(), 
          }
        ]


      },
      // end 0f jazz 3
      
      
      
     

      

    ]
    
   
    
  });
  const { value, error } = schema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  const survey = new Survey({ ...value });
  const savedSurvey = await survey.save()

  // const surveyRate = {
  //   name: req.body.name,
  //   country: req.body.country,
  //   email: req.body.email,
  //   rock1: req.body.rock1,
  //   rock2: req.body.rock2,
  //   rock3: req.body.rock3,
  //   pop1: req.body.pop1,
  //   pop2: req.body.pop2,
  //   pop3: req.body.pop3,
  //   jazz1: req.body.jazz1,
  //   jazz2: req.body.jazz2,
  //   jazz3: req.body.jazz3,
  // };
  // surveyRate.push()
  res.send(savedSurvey);
});

app.listen({ port: 8000 }, () => {
  console.log("====================================");
  console.log("Server is running on port 8000");
  console.log("====================================");
});
