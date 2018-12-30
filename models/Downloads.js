const mongoose = require('mongoose')
const Schema = mongoose.Schema
var ObjectId = mongoose.Schema.Types.ObjectId;


const downloadSchema = new Schema({
    movie: {type: String},
    onCLient: {type: Boolean}
})

const Download = mongoose.model('downloads', downloadSchema)

module.exports = Download