const mongoose = require('mongoose');
const schema = mongoose.Schema;

let productSchema = new schema({
    name: String,
    department: String,
    price: Number
});
//O nome da coleção que será salvo no mongo e o modelo
module.exports = mongoose.model("product",productSchema);