import axios from 'axios'
import { ADD_DOWNLOAD, FETCH_MOVIES, GET_MOVIE } from './types'

export const fetchMovies = () => async dispatch => {
  const url = 'https://tv-v2.api-fetch.website/movies/1?sort=trending&order=-1&genre=all'  
  const res = await axios.get(url)
  const movies = res.data
  console.log(movies)
  dispatch({ type: FETCH_MOVIES, payload: movies})
}

export const getMovie = (id) => async dispatch => {
  const url = 'https://tv-v2.api-fetch.website/movie/'
  console.log(url + id)
  const res = await axios.get(url + id)
  const movie = res.data

  // const movie = {...res.data }

  dispatch({ type: GET_MOVIE, payload: [movie]})
}

export const addDownload = (movie, onClient) => async dispatch => {
  const res = await axios.post('/api/new_download', {movie, onClient})

  dispatch({ type: ADD_DOWNLOAD, payload: 'added to download'})
}