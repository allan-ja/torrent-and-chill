const mongoose = require('mongoose')
const Schema = mongoose.Schema
var ObjectId = mongoose.Schema.Types.ObjectId;


const downloadSchema = new Schema({
    movie: ObjectId,
    onClient: Boolean,
    user: ObjectId
}, {timestamps: true})

const Download = mongoose.model('downloads', downloadSchema)

module.exports = Download