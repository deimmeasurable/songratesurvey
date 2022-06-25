const mongoose = require("mongoose");

const rating = {
  type: Number,
  min: 1,
  max: 5,
  required: true,
};
// const validateEmail = (email) => {
//     return String(email)
//       .toLowerCase()
//       .match(
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//       );
//   };

const surveySchema = mongoose.Schema(
  {
    name: {
      type: String,
      minLength: 3,
      maxLength: 255,
      required: true,
    },
    country: {
      type: String,
      minLength: 3,
      maxLength: 255,
      required: true,
    },
    email: {
      type: String,
      Lowercase: true,
      minLength: 5,
      maxLength: 255,
      // pattern:validateEmail,
      required: true,
    },
    ratings: [
      {
        genre: {
          type: String,
          // Lowercase:true,
          minLength: 5,
          required: true,
        },
        comment: {
          type: String,
          minLength: 5,
          required: true,
        },
        ratings: [
          {
            genre: {
              type: String,

              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            rating: {
              type: String,

              minLength: 5,
              required: true,
            },
        
          },
          {
            genre: {
              type: String,
              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,
              minLength: 5,
              required: true,
            },
            rating: {
              type: String,
              minLength: 5,
              required: true,
            },
          },
          {
            genre: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,

              minLength: 5,
              required: true,
            },
            rating: {
              type: String,

              minLength: 5,
              required: true,
            },
          },
          {
            genre: {
              type: String,

              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,

              minLength: 5,
              required: true,
            },
            rating: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
          },
        ],
      },
      {
        genre: {
          type: String,
          // Lowercase:true,
          minLength: 5,
          required: true,
        },
        comment: {
          type: String,
          // Lowercase:true,
          minLength: 5,
          required: true,
        },
        ratings: [
          {
            genre: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            rating: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
          },
          {
            genre: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            rating: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
          },
          {
            genre: {
              type: String,

              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,

              minLength: 5,
              required: true,
            },
            rating: {
              type: String,

              minLength: 5,
              required: true,
            },
          },
          {
            genre: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,

              minLength: 5,
              required: true,
            },
            rating: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
          },
        ],
      },
      {
        genre: {
          type: String,
          // Lowercase:true,
          minLength: 5,
          required: true,
        },
        comment: {
          type: String,
          // Lowercase:true,
          minLength: 5,
          required: true,
        },
        ratings: [
          {
            genre: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            rating: {
              type: String,

              minLength: 5,
              required: true,
            },
          },
          {
            genre: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,

              minLength: 5,
              required: true,
            },
            rating: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
          },
          {
            genre: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            rating: {
              type: String,

              minLength: 5,
              required: true,
            },
          },
          {
            genre: {
              type: String,

              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,

              minLength: 5,
              required: true,
            },
            rating: {
              type: String,

              minLength: 5,
              required: true,
            },
          },
        ],
      },

      {
        genre: {
          type: String,

          minLength: 5,
          required: true,
        },
        comment: {
          type: String,

          minLength: 5,
          required: true,
        },
        ratings: [
          {
            genre: {
              type: String,

              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,

              minLength: 5,
              required: true,
            },
            rating: {
              type: String,

              minLength: 5,
              required: true,
            },
          },
          {
            genre: {
              type: String,

              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,

              minLength: 5,
              required: true,
            },
            rating: {
              type: String,

              minLength: 5,
              required: true,
            },
          },
          {
            genre: {
              type: String,

              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,

              minLength: 5,
              required: true,
            },
            rating: {
              type: String,

              minLength: 5,
              required: true,
            },
          },
          {
            genre: {
              type: String,

              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,

              minLength: 5,
              required: true,
            },
            rating: {
              type: String,

              minLength: 5,
              required: true,
            },
          },
        ],
      },
      {
        genre: {
          type: String,
          // Lowercase:true,
          minLength: 5,
          required: true,
        },
        comment: {
          type: String,
          // Lowercase:true,
          minLength: 5,
          required: true,
        },
        ratings: [
          {
            genre: {
              type: String,

              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            rating: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
          },
          {
            genre: {
              type: String,

              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,

              minLength: 5,
              required: true,
            },
            rating: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
          },
          {
            genre: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            rating: {
              type: String,

              minLength: 5,
              required: true,
            },
          },
          {
            genre: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            rating: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
          },
        ],
      },

      {
        genre: {
          type: String,
          // Lowercase:true,
          minLength: 5,
          required: true,
        },
        comment: {
          type: String,
          // Lowercase:true,
          minLength: 5,
          required: true,
        },
        ratings: [
          {
            genre: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            rating: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
          },
          {
            genre: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            rating: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
          },
          {
            genre: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,

              minLength: 5,
              required: true,
            },
            rating: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
          },
          {
            genre: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            rating: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
          },
        ],
      },

      {
        genre: {
          type: String,
          // Lowercase:true,
          minLength: 5,
          required: true,
        },
        comment: {
          type: String,
          // Lowercase:true,
          minLength: 5,
          required: true,
        },
        ratings: [
          {
            genre: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            rating: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
          },
          {
            genre: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            rating: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
          },
          {
            genre: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            rating: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
          },
          {
            genre: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            rating: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
          },
        ],
      },
      {
        genre: {
          type: String,
          // Lowercase:true,
          minLength: 5,
          required: true,
        },
        comment: {
          type: String,
          // Lowercase:true,
          minLength: 5,
          required: true,
        },
        ratings: [
          {
            genre: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            rating: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
          },
          {
            genre: {
              type: String,

              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            rating: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
          },
          {
            genre: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            rating: {
              type: String,

              minLength: 5,
              required: true,
            },
          },
          {
            genre: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            rating: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
          },
        ],
      },
      {
        genre: {
          type: String,
          // Lowercase:true,
          minLength: 5,
          required: true,
        },
        comment: {
          type: String,
          // Lowercase:true,
          minLength: 5,
          required: true,
        },
        ratings: [
          {
            genre: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,

              minLength: 5,
              required: true,
            },
            rating: {
              type: String,

              minLength: 5,
              required: true,
            },
          },
          {
            genre: {
              type: String,

              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,

              minLength: 5,
              required: true,
            },
            rating: {
              type: String,

              minLength: 5,
              required: true,
            },
          },
          {
            genre: {
              type: String,

              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,

              minLength: 5,
              required: true,
            },
            rating: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
          },
          {
            genre: {
              type: String,
              // Lowercase:true,
              minLength: 5,
              required: true,
            },
            track_Id: {
              type: String,

              minLength: 5,
              required: true,
            },
            rating: {
              type: String,

              minLength: 5,
              required: true,
            },
          },
        ],
      },
    ],
  },

  { timestamps: true }
);
const Survey = mongoose.model("surveyData", surveySchema);
module.exports = Survey;
// module.exports = mongoose =>{
//     var schema = mongoose.model('survey',

//     )
//     // schema.method("toJSON", function(){
//     //     const {_v, _id, ...object} = this.toObject();
//     //     object.id = _id;
//     //     return object;
//     // })

//     return SurveyDetails;
// }
