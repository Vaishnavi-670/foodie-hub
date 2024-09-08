const {Schema,model,} = require('../connection');
const myschema = new Schema({
    name: String,
    category: String,
    description: String,
    image: String

});

module.exports=model('product',myschema);