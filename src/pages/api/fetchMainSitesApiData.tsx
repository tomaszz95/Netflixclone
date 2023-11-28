import {
    getAllBrowseMoviesData,
    getAllBrowseSeriesData,
    getAllTVSeriesData,
    getAllMovieData,
    getAllPopularAndNewestData,
} from '../../components/APIHelpers/fetchingApiData'

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

export async function getAllAPIFetchedPopularAndNewestData() {
    const fetchedData = await getAllPopularAndNewestData()

    return {
        ...fetchedData,
    }
}
