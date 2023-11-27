import {
    getAllBrowseMoviesData,
    getAllBrowseSeriesData,
    getAllTVSeriesData,
    getAllMovieData,
} from '../../components/helpers/fetchingApiData'

export async function getAllAPIFetchedData() {
    const moviesData = await getAllBrowseMoviesData()
    const seriesData = await getAllBrowseSeriesData()

    return {
        ...moviesData,
        ...seriesData,
    }
}

export async function getAllAPIFetchedDataShows() {
    const seriesData = await getAllTVSeriesData()

    return {
        ...seriesData,
    }
}

export async function getAllAPIFetchedDataMovies() {
    const movieData = await getAllMovieData()
  
    return {
        ...movieData,
    }
}
