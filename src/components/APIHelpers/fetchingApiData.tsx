import { fullMoviesDataType, fullSeriesDataType } from '../helpers/types'
import {
    getOptions,
    moviesGenreLinks,
    seriesGenreLinks,
    allSeriesLinks,
    allMoviesLinks,
    popularAndNewestSeries,
    popularAndNewestMovies,
} from './toFetchDataObjects'

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
const moviesDataFuncHero = (moviesData: fullMoviesDataType) => {
    let moviesArray = []

    for (const key in moviesData.results) {
        if (moviesData.results.hasOwnProperty(key)) {
            const movie = moviesData.results[key]
            const posterPath = movie.poster_path
            const movieTitle = movie.title
            const movieId = movie.id
            const movieOverview = movie.overview

            moviesArray.push({ posterPath, movieTitle, movieId, movieOverview })
        }
    }

    return moviesArray
}

const seriesDataFuncHero = (seriesData: fullSeriesDataType) => {
    let seriesArray = []

    for (const key in seriesData.results) {
        if (seriesData.results.hasOwnProperty(key)) {
            const series = seriesData.results[key]
            const posterPath = series.poster_path
            const movieTitle = series.name
            const movieId = series.id
            const movieOverview = series.overview

            seriesArray.push({ posterPath, movieTitle, movieId, movieOverview })
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

export async function searchMoviesByInput(keyword: string, user: string) {
    if (user !== 'kids') {
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
    } else {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=1&certification=PG-13&certification_country=US`,
                getOptions,
            )
            const responseData = await response.json()
            const fixedData = moviesDataFunc(responseData)
            return fixedData
        } catch (error) {
            throw new Error('Failed to fetch series data')
        }
    }
}

export async function searchSeriesByInput(keyword: string, user: string) {
    if (user !== 'kids') {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/tv?query=${keyword}&include_adult=false&language=en-US&page=1`,
                getOptions,
            )
            const responseData = await response.json()
            const fixedData = seriesDataFunc(responseData)
            console.log(fixedData)

            return fixedData
        } catch (error) {
            throw new Error('Failed to fetch series data')
        }
    } else {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/tv?query=${keyword}&include_adult=false&language=en-US&page=1&certification=PG-13&certification_country=US`,
                getOptions,
            )
            const responseData = await response.json()
            const fixedData = seriesDataFunc(responseData)
            console.log(fixedData)
            return fixedData
        } catch (error) {
            throw new Error('Failed to fetch series data')
        }
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

export async function getAllMovieData() {
    let moviesObj: { [key: string]: any } = {}

    const promises = allMoviesLinks.map(async (linkObj) => {
        const moviesDataType = linkObj.type
        const moviesDataLink = linkObj.link
        const fetchedMoviesData = await moviesGetDataFunc(moviesDataLink)

        moviesObj[moviesDataType] = fetchedMoviesData
    })

    await Promise.all(promises)

    return moviesObj
}

export async function getHeroSeriesData() {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1`, getOptions)
        const responseData = await response.json()
        const fixedData = seriesDataFuncHero(responseData)

        return fixedData
    } catch (error) {
        throw new Error('Failed to fetch series data')
    }
}

export async function getHeroMoviesData() {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`, getOptions)
        const responseData = await response.json()
        const fixedData = moviesDataFuncHero(responseData)

        return fixedData
    } catch (error) {
        throw new Error('Failed to fetch movie data')
    }
}

export async function getHeroBrowseData() {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc`,
            getOptions,
        )
        const responseData = await response.json()
        const fixedData = seriesDataFuncHero(responseData)

        return fixedData
    } catch (error) {
        throw new Error('Failed to fetch series data')
    }
}

export async function getHeroKidsData() {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16`,
            getOptions,
        )
        const responseData = await response.json()
        const fixedData = moviesDataFuncHero(responseData)

        return fixedData
    } catch (error) {
        throw new Error('Failed to fetch series data')
    }
}

export async function getAllPopularAndNewestData() {
    let moviesAndSeries: { [key: string]: any } = {}

    const promisesSeries = popularAndNewestSeries.map(async (linkObj) => {
        const seriesDataType = linkObj.type
        const seriesDataLink = linkObj.link
        const fetchedSeriesData = await seriesGetDataFunc(seriesDataLink)

        moviesAndSeries[seriesDataType] = fetchedSeriesData
    })

    const promisesMovies = popularAndNewestMovies.map(async (linkObj) => {
        const moviesDataType = linkObj.type
        const moviesDataLink = linkObj.link
        const fetchedMoviesData = await moviesGetDataFunc(moviesDataLink)

        moviesAndSeries[moviesDataType] = fetchedMoviesData
    })
    await Promise.all([...promisesSeries, ...promisesMovies])

    return moviesAndSeries
}
