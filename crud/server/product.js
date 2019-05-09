let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let productSchema = new Schema(
    {
        name: String,
        price: Number,
        stock: Number,
        departments: [
            {
                // Qual o tipo de chave que é utilizada e qual a referencia do objeto que dará as chaves
                type: mongoose.Schema.Types.ObjectId, ref: 'Department'
            }
        ]
    },
    // Para cada produto ele não vai criar o __version
    { versionKey: false }
);

module.exports = mongoose.model("Product", productSchema);