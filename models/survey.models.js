module.exports = mongoose =>{
    var schema = mongoose.model('survey', 
        mongoose.Schema({
            name: String,
            country: String,
            email: String,
            comment: String
        },
        {timestamp:true}
        )
    )
    schema.method("toJSON", function(){
        const {_v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    })
    
    const SurveyDetails = mongoose.model("survey", schema);
    return SurveyDetails;
}

