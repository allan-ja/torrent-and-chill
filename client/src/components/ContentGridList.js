import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import StarRate from '@material-ui/icons/StarRate'
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';

import { fetchMovies } from '../actions'

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


class ContentGridList extends Component {
    componentDidMount() {
        this.props.fetchMovies()
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <GridList cellHeight={180} className={classes.gridList}>
                    {this.props.movies.map(tile => (
                        <GridListTile key={tile._id}>
                            <img src={tile.images.banner} />
                            <GridListTileBar
                                title={tile.title}
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        )
    }
}

function mapStateToProps({ movies }) {
    return { movies }
}

export default connect(
    mapStateToProps, { fetchMovies })(
        withStyles(styles)(ContentGridList))
