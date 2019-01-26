var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name:  {type: String, required:true, trim:true},
    email: {type: String, required:true, trim:true},
    passowrd:{type: String, required:true, trim:true},
    balance : Number,
    income :Number,
    expense : Number,
    transaction :{type:[{
        type: Schema.Types.ObjectId,
            ref:"Transaction"
        }]}
});

var User = mongoose.model('User', userSchema);

module.exports = User