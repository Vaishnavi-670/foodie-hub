const {model ,Schema, }= require('../connection');
const mySchema = new Schema({
    name: String,
    email:{type: String, unique: true},
    password: Number,
    createdAt:{type: Date, default: Date.now()},
});
module.exports = model( 'users', mySchema);   