const mongoose = require('mongoose');

const rating= {
    type:Number,
min:1,
max:5,
required:true
}
// const validateEmail = (email) => {
//     return String(email)
//       .toLowerCase()
//       .match(
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//       );
//   };

const surveySchema = mongoose.Schema({
    name: {
        type: String,
        minLength:3, 
        maxLength:255,
        required: true
    },
    country:{
        type:String,
        minLength:3,
        maxLength:255,
        required: true
        
    },
    email:{
        type:String,
        Lowercase:true,
        minLength:5,
        maxLength:255,
        // pattern:validateEmail,
        required: true
    },
    rock1:{
        'r1_1':rating,
        'r1_2':rating,
        'r1_3':rating,
        'r1_4':rating,
        comment:{
            type:String, 
            minLength:3,
            maxLength:500,
            required: true 

        }
       
    },
    rock2:{
        'r2_1':rating,
        'r2_2':rating,
        'r2_3':rating,
        'r2_4':rating,
        comment:{
            type:String, 
            minLength:3,
            maxLength:500,
            required: true 

        }
       
    },
    rock3:{
        'r3_1':rating,
        'r3_2':rating,
        'r3_3':rating,
        'r3_4':rating,
        comment:{
            type:String, 
            minLength:3,
            maxLength:500,
            required: true 

        }
       
    },
    pop1:{
        'p1_1':rating,
        'p1_2':rating,
        'p1_3':rating,
        'p1_4':rating,
        comment:{
            type:String, 
            minLength:3,
            maxLength:500,
            required: true 

        }
       
    },
    pop2:{
        'p2_1':rating,
        'p2_2':rating,
        'p2_3':rating,
        'p2_4':rating,
        comment:{
            type:String, 
            minLength:3,
            maxLength:500,
            required: true 

        }
       
    },
    pop3:{
        'p3_1':rating,
        'p3_2':rating,
        'p3_3':rating,
        'p3_4':rating,
        comment:{
            type:String, 
            minLength:3,
            maxLength:500,
            required: true 

        }
       
    },
    jazz1:{
        'j1_1':rating,
        'j1_2':rating,
        'j1_3':rating,
        'j1_4':rating,
        comment:{
            type:String, 
            minLength:3,
            maxLength:500,
            required: true 

        }
       
    },
    jazz2:{
        'j2_1':rating,
        'j2_2':rating,
        'j2_3':rating,
        'j2_4':rating,
        comment:{
            type:String, 
            minLength:3,
            maxLength:500,
            required: true 

        }
       
    },
    jazz3:{
        'j3_1':rating,
        'j3_2':rating,
        'j3_3':rating,
        'j3_4':rating,
        comment:{
            type:String, 
            minLength:3,
            maxLength:500,
            required: true 

        }

    },

   
},
{timestamps:true}
)
const Survey = mongoose.model("survey", surveySchema);
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

