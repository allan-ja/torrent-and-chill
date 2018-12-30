const mongoose = require('mongoose')
const Download = mongoose.model('downloads')


module.exports = function (app) {
    app.post('/api/new_download', async (req, res) => {
        console.log(req.body)
        const newDownload = await new Download(req.body).save()

        res.send('Download')
    })
}
