import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'
import blue from '@material-ui/core/colors/blue'

import Header from './Header'
import ContentGridList from './ContentGridList'
import MovieCard from './MovieCard'
import MoviePage from './MoviePage'

const movie = {"_id":"tt1270797","imdb_id":"tt1270797","title":"Venom","year":"2018","synopsis":"Eddie Brock is a reporter—investigating people who want to go unnoticed. But after he makes a terrible discovery at the Life Foundation, he begins to transform into ‘Venom’.  The Foundation has discovered creatures called symbiotes, and believes they’re the key to the next step in human evolution. Unwittingly bonded with one, Eddie discovers he has incredible new abilities—and a voice in his head that’s telling him to embrace the darkness.","runtime":"112","released":1538697600,"certification":"PG-13","torrents":{"en":{"1080p":{"url":"magnet:?xt=urn:btih:03BB57EA1F7E8DC9CC7DA349B549D7A7C5BC3359&tr=udp://glotorrents.pw:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://torrent.gresille.org:80/announce&tr=udp://tracker.openbittorrent.com:80&tr=udp://tracker.coppersurfer.tk:6969&tr=udp://tracker.leechers-paradise.org:6969&tr=udp://p4p.arenabg.ch:1337&tr=udp://tracker.internetwarriors.net:1337","seed":27225,"peer":11968,"size":1836098519,"filesize":"1.71 GB","provider":"YTS"},"720p":{"provider":"YTS","filesize":"908.6 MB","size":952736154,"peer":10349,"seed":18762,"url":"magnet:?xt=urn:btih:FDF369445A7E51534E101132F3E01363F3525109&tr=udp://glotorrents.pw:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://torrent.gresille.org:80/announce&tr=udp://tracker.openbittorrent.com:80&tr=udp://tracker.coppersurfer.tk:6969&tr=udp://tracker.leechers-paradise.org:6969&tr=udp://p4p.arenabg.ch:1337&tr=udp://tracker.internetwarriors.net:1337"}}},"trailer":"http://youtube.com/watch?v=u9Mv98Gr5pY","genres":["science-fiction","superhero"],"images":{"poster":"http://image.tmdb.org/t/p/w500/bURIWlkMbzT8RdpemzCmQECo2Uh.jpg","fanart":"http://image.tmdb.org/t/p/w500/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg","banner":"http://image.tmdb.org/t/p/w500/bURIWlkMbzT8RdpemzCmQECo2Uh.jpg"},"rating":{"percentage":73,"watching":223,"votes":5014,"loved":100,"hated":100}}
const theme = createMuiTheme({
    palette: {
        primary: { main: green[600] },
        secondary: { main: blue['A700']}
    },
    typography: {
        useNextVariants: true,
      }
})
class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Header />
                {/* <MovieCard movie={movie} /> */}
                <MoviePage movie={movie} />
                {/* <ContentGridList /> */}
            </MuiThemeProvider>
        )
    }
}

export default App;