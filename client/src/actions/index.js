import axios from 'axios'
import { FETCH_MOVIES } from './types'

export const fetchMovies = () => async dispatch => {
  const url = 'https://tv-v2.api-fetch.website/movies/1?sort=trending&order=-1&genre=all'  
  const res = await axios.get(url)
  const movies = res.data
  dispatch({ type: FETCH_MOVIES, payload: movies})
}