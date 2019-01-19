import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { Button, Typography } from '@material-ui/core';

import { addDownload, getMovie } from '../actions'

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    }
})

class MoviePage extends Component {
    componentDidMount() {
        this.props.getMovie(this.props.match.params.id)
        console.log('WASSSSUUUPPP')
    }

    onClientClick = () => {
        this.props.addDownload(this.props.movies[0].title, true)
    }

    onServerClick = () => {
        this.props.addDownload(this.props.movies[0].title, false)
    }

    render(){
        const { classes, movies } = this.props
        const movie = movies[0]
        return (
            <div> 
                <Typography variant='display2'>
                    {movie.title}
                </Typography>
                <Typography variant='body1'>
                    {movie.synopsis}
                </Typography>
                <Button 
                    variant='contained'
                    color='primary'
                    className={ classes.button }
                    onClick={ this.onClientClick }
                >
                    Download on client
                </Button>
                <Button 
                    variant='outlined'
                    color='primary'
                    className={ classes.button }
                    onClick={ this.onServerClick }>
                    Download on server
                </Button>
            </div>
            
        )
    }
}

function mapStateToProps({ movies }) {
    return { movies }
}

export default connect(
    mapStateToProps, { addDownload, getMovie })(
        withStyles(styles)(MoviePage)
    )
