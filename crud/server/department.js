let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let departmentSchema = new Schema(
    {
        name: String
    },
    // Para cada produto ele não vai criar o __version
    { versionKey: false }
);

module.exports = mongoose.model("Department", departmentSchema);