import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import StarRate from '@material-ui/icons/StarRate'
import { Grid } from '@material-ui/core';
import MovieCard from './MovieCard'

import { fetchMovies } from '../actions'

const styles = theme => ({
    root: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          overflow: 'hidden',
          backgroundColor: theme.palette.background.paper,
        },
    grid: {
        padding: theme.spacing.unit
    },
    gridTile: {

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
                <Grid container className={classes.grid}>
                    {this.props.movies.map(item => (
                        <Grid item className={classes.grid}>
                            <MovieCard movie={item} />
                        </Grid>
                    ))}
                </Grid>
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
