import {
    getAllBrowseMoviesData,
    getAllBrowseSeriesData,
    getAllTVSeriesData,
    getAllMovieData,
    getAllPopularAndNewestData,
} from '../../lib/fetchApiData'

export async function getAllAPIFetchedData() {
    const moviesData = await getAllBrowseMoviesData('browse')
    const seriesData = await getAllBrowseSeriesData('browse')

    return {
        ...moviesData,
        ...seriesData,
    }
}

export async function getAllKidsAPIFetchedData() {
    const moviesData = await getAllBrowseMoviesData('kids')
    const seriesData = await getAllBrowseSeriesData('kids')

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
