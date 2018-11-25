import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import StarRate from '@material-ui/icons/StarRate'
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';

const styles = theme => ({
    root: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          overflow: 'hidden',
          backgroundColor: theme.palette.background.paper,
        },
    gridList: {
        width: 500,
        height: 450
    }
})

const movies = [{"_id":"tt3606756","imdb_id":"tt3606756","title":"Incredibles 2","year":"2018","synopsis":"Elastigirl springs into action to save the day, while Mr. Incredible faces his greatest challenge yet – taking care of the problems of his three children.","runtime":"118","released":1529020800,"certification":"PG","torrents":{"en":{"1080p":{"provider":"YTS","filesize":"1.87 GB","size":2007897211,"peer":7138,"seed":18930,"url":"magnet:?xt=urn:btih:6B7469C830B624321F843A95D0BD162AAF2ABFF4&tr=udp://glotorrents.pw:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://torrent.gresille.org:80/announce&tr=udp://tracker.openbittorrent.com:80&tr=udp://tracker.coppersurfer.tk:6969&tr=udp://tracker.leechers-paradise.org:6969&tr=udp://p4p.arenabg.ch:1337&tr=udp://tracker.internetwarriors.net:1337"},"720p":{"provider":"YTS","filesize":"992.65 MB","size":1040868966,"peer":7739,"seed":14301,"url":"magnet:?xt=urn:btih:23FCDD2D194D479DE2C38E1DD1BEFE6D8B28AF9B&tr=udp://glotorrents.pw:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://torrent.gresille.org:80/announce&tr=udp://tracker.openbittorrent.com:80&tr=udp://tracker.coppersurfer.tk:6969&tr=udp://tracker.leechers-paradise.org:6969&tr=udp://p4p.arenabg.ch:1337&tr=udp://tracker.internetwarriors.net:1337"}}},"trailer":"http://youtube.com/watch?v=i5qOzqD9Rms","genres":["animation","family","action","adventure","superhero"],"images":{"poster":"http://image.tmdb.org/t/p/w500/x1txcDXkcM65gl7w20PwYSxAYah.jpg","fanart":"http://image.tmdb.org/t/p/w500/mabuNsGJgRuCTuGqjFkWe1xdu19.jpg","banner":"http://image.tmdb.org/t/p/w500/x1txcDXkcM65gl7w20PwYSxAYah.jpg"},"rating":{"percentage":81,"watching":110,"votes":8648,"loved":100,"hated":100}}]

function MovieCard(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
            {movies.map(tile => (
                <GridListTile key={tile._id}>
                    <img src={tile.images.banner} />
                    <GridListTileBar
                        title={tile.title}
                    />
                </GridListTile>
            ))}
        </GridList>

    </div>
  );
}

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieCard);
