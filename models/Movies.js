const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
  imdb_id: String,
  title: String,
  year: Number,
  synopsis: String,
  runtime: Number,
  released: Number,
  certification: String,
  torrents: {
    en: {
      '1080p': {
        url: String,
        seed: Number,
        peer: Number,
        size: Number,
        filesize: String,
        provider: String
      },
      '720p': {
        provider: String,
        filesize: String,
        size: Number,
        peer: Number,
        seed: Number,
        url: String
      },
    }
  },
  trailer: String,
  genres: [String],
  images: {
    poster: String,
    fanart: String,
    banner: String
  },
  rating:{
    percentage: Number,
    watching: Number,
    votes: Number,
    loved: Number,
    hated: Number
  }
})

const Movie = mongoose.model('movies', movieSchema)

module.exports = Movie
