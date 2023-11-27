import { fullMoviesDataType, fullSeriesDataType } from './types'
import { getOptions, moviesGenreLinks, seriesGenreLinks, allSeriesLinks } from './toFetchData'

const moviesDataFunc = (moviesData: fullMoviesDataType) => {
    let moviesArray = []

    for (const key in moviesData.results) {
        if (moviesData.results.hasOwnProperty(key)) {
            const movie = moviesData.results[key]
            const posterPath = movie.poster_path
            const movieTitle = movie.title
            const movieId = movie.id
            const movieVote = movie.vote_average
            const moviePopularity = movie.popularity

            moviesArray.push({ posterPath, movieTitle, movieId, movieVote, moviePopularity })
        }
    }

    return moviesArray
}

const seriesDataFunc = (seriesData: fullSeriesDataType) => {
    let seriesArray = []

    for (const key in seriesData.results) {
        if (seriesData.results.hasOwnProperty(key)) {
            const series = seriesData.results[key]
            const posterPath = series.poster_path
            const movieTitle = series.name
            const movieId = series.id
            const movieVote = series.vote_average
            const moviePopularity = series.popularity

            seriesArray.push({ posterPath, movieTitle, movieId, movieVote, moviePopularity })
        }
    }

    return seriesArray
}

export const moviesGetDataFunc = async (link: string) => {
    try {
        const response = await fetch(link, getOptions)
        const responseData = await response.json()
        const fixedData = moviesDataFunc(responseData)

        return fixedData
    } catch (error) {
        throw new Error('Failed to fetch movies data')
    }
}

export const seriesGetDataFunc = async (link: string) => {
    try {
        const response = await fetch(link, getOptions)
        const responseData = await response.json()
        const fixedData = seriesDataFunc(responseData)

        return fixedData
    } catch (error) {
        throw new Error('Failed to fetch series data')
    }
}

export async function getAllBrowseMoviesData() {
    let moviesObj: { [key: string]: any } = {}

    const promises = moviesGenreLinks.map(async (linkObj) => {
        const moviesDataType = linkObj.type
        const moviesDataLink = linkObj.link
        const fetchedMoviesData = await moviesGetDataFunc(moviesDataLink)

        moviesObj[moviesDataType] = fetchedMoviesData
    })

    await Promise.all(promises)

    return moviesObj
}

export async function getAllBrowseSeriesData() {
    let seriesObj: { [key: string]: any } = {}

    const promises = seriesGenreLinks.map(async (linkObj) => {
        const seriesDataType = linkObj.type
        const seriesDataLink = linkObj.link
        const fetchedSeriesData = await seriesGetDataFunc(seriesDataLink)

        seriesObj[seriesDataType] = fetchedSeriesData
    })

    await Promise.all(promises)

    return seriesObj
}

export async function searchMoviesByInput(keyword: string) {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=1`,
            getOptions,
        )
        const responseData = await response.json()
        const fixedData = moviesDataFunc(responseData)
        return fixedData
    } catch (error) {
        throw new Error('Failed to fetch series data')
    }
}

export async function searchSeriesByInput(keyword: string) {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/search/tv?query=${keyword}&include_adult=false&language=en-US&page=1`,
            getOptions,
        )
        const responseData = await response.json()
        const fixedData = seriesDataFunc(responseData)

        return fixedData
    } catch (error) {
        throw new Error('Failed to fetch series data')
    }
}

export async function getAllTVSeriesData() {
    let seriesObj: { [key: string]: any } = {}

    const promises = allSeriesLinks.map(async (linkObj) => {
        const seriesDataType = linkObj.type
        const seriesDataLink = linkObj.link
        const fetchedSeriesData = await seriesGetDataFunc(seriesDataLink)

        seriesObj[seriesDataType] = fetchedSeriesData
    })

    await Promise.all(promises)

    return seriesObj
}
