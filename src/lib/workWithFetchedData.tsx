import { fullMoviesDataType, fullSeriesDataType } from '../types/types'

export const moviesDataFunc = (moviesData: fullMoviesDataType) => {
    let moviesArray = []

    for (const key in moviesData.results) {
        if (moviesData.results.hasOwnProperty(key)) {
            const movie = moviesData.results[key]
            const posterPath = movie.poster_path
            const movieTitle = movie.title
            const movieId = movie.id
            const movieVote = movie.vote_average
            const moviePopularity = movie.popularity
            const type = 'movie'

            moviesArray.push({ posterPath, movieTitle, movieId, movieVote, moviePopularity, type })
        }
    }

    return moviesArray
}

export const seriesDataFunc = (seriesData: fullSeriesDataType) => {
    let seriesArray = []

    for (const key in seriesData.results) {
        if (seriesData.results.hasOwnProperty(key)) {
            const series = seriesData.results[key]
            const posterPath = series.poster_path
            const movieTitle = series.name
            const movieId = series.id
            const movieVote = series.vote_average
            const moviePopularity = series.popularity
            const type = 'series'

            seriesArray.push({ posterPath, movieTitle, movieId, movieVote, moviePopularity, type })
        }
    }

    return seriesArray
}

export const moviesDataFuncHero = (moviesData: fullMoviesDataType) => {
    let moviesArray = []

    for (const key in moviesData.results) {
        if (moviesData.results.hasOwnProperty(key)) {
            const movie = moviesData.results[key]
            const posterPath = movie.poster_path
            const movieTitle = movie.title
            const movieId = movie.id
            const movieOverview = movie.overview
            const type = 'movie'

            moviesArray.push({ posterPath, movieTitle, movieId, movieOverview, type })
        }
    }

    return moviesArray
}

export const seriesDataFuncHero = (seriesData: fullSeriesDataType) => {
    let seriesArray = []

    for (const key in seriesData.results) {
        if (seriesData.results.hasOwnProperty(key)) {
            const series = seriesData.results[key]
            const posterPath = series.poster_path
            const movieTitle = series.name
            const movieId = series.id
            const movieOverview = series.overview
            const type = 'series'

            seriesArray.push({ posterPath, movieTitle, movieId, movieOverview, type })
        }
    }

    return seriesArray
}
