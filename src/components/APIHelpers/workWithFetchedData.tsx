import { fullMoviesDataType, fullSeriesDataType } from '../helpers/types'

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

            moviesArray.push({ posterPath, movieTitle, movieId, movieVote, moviePopularity })
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

            seriesArray.push({ posterPath, movieTitle, movieId, movieVote, moviePopularity })
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

            moviesArray.push({ posterPath, movieTitle, movieId, movieOverview })
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

            seriesArray.push({ posterPath, movieTitle, movieId, movieOverview })
        }
    }

    return seriesArray
}

