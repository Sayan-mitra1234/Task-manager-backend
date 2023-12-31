const mongoose =require( 'mongoose');
const autoIncrement= require('mongoose-auto-increment') ;

// how our document look like
const userSchema = mongoose.Schema({
    tittle: String,
    description: String,
    duedate: String
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');
// we need to turn it into a model
const postUser = mongoose.model('user', userSchema);

module.exports= postUser;