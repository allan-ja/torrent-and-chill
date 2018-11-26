import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'
import blue from '@material-ui/core/colors/blue'

import Header from './Header'
import ContentGridList from './ContentGridList'
import MovieCard from './MovieCard'


const theme = createMuiTheme({
    palette: {
        primary: { main: green[600] },
        secondary: { main: blue['A700']}
    }
})
class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Header />
                {/* <MovieCard /> */}
                <ContentGridList />
            </MuiThemeProvider>
        )
    }
}

export default App;