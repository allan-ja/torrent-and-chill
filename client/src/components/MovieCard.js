import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'


const styles = theme => ({
  root: {
    maxWidth: 175,
    flexGrow: 1,
    padding: 0
  },
  grid: {
    padding: 0
  },
  subheader: {
    container: true,
    maxWidth: '100%',
    maxHeight: '100%',
    padding: theme.spacing.unit
  },
  image: {
    // display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },


})

class MovieCard extends Component {

  render(){
    const { classes, movie } = this.props
    return (
        <Paper className={classes.root}>
          <Grid container  classeName={classes.grid} direction="column" justify='flex-start'>
            <Grid item xs={12}>
              <img className={classes.image} src={movie.images.poster} />
            </Grid>
            <Grid item xs={6} className={classes.subheader} direction='row'>
              <Grid item >
                <Typography gutterBottom variant="display1">
                  {movie.title}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
      </Paper>
    )
  }
}

export default withStyles(styles)(MovieCard)