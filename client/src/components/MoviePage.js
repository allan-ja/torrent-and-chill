import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Button, Typography } from '@material-ui/core';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    }
})

class MoviePage extends Component {

    render(){
        const { classes, movie } = this.props
        return (
            <div> 
                <Typography variant='display2'>
                {movie.title}
                </Typography>
                <Typography variant='body1'>
                    {movie.synopsis}
                </Typography>
                <Button variant='contained' color='primary' className={classes.button} >
                Download on client
                </Button>
                <Button variant='outlined' color='primary' className={classes.button}>
                Download on server
                </Button>

            </div>
            
        )
    }
}

export default withStyles(styles)(MoviePage)