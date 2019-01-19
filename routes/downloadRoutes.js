const mongoose = require('mongoose')
const Download = mongoose.model('downloads')
const Movie = mongoose.model('movies')


module.exports = function (app) {
    app.post('/api/new_download', async (req, res) => {
        var movie_id = ''
        const movie = await Movie.findOne({ imdb_id: req.body.movie.imdb_id})
        if (movie) { movie_id = movie._id }
        else {
            const newMovie = await new Movie(req.body.movie).save()
            movie_id = newMovie._id
        }
        delete req.body.movie
        const newDownload = await new Download({
            movie: movie_id,
            onClient: req.body.onClient,
            user: req.user._id
        }).save()

        res.send(movie_id)
    })

    app.get('/api/my_downloads', async (req, res) => {
        if(req.user) {
            const downloads = await Download.find({ user: req.user._id })
            res.send(downloads)
        }
        else {
            res.send('You are not logged in')
        }
    })
}
