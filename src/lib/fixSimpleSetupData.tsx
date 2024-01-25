import { fullMoviesDataType, fullSeriesDataType, fetchedMoviesPropsData } from '../types/simpleSetupTypes'

export const fixSimpleSetupData = (moviesData: fullMoviesDataType, seriesData: fullSeriesDataType) => {
    let linksArray: fetchedMoviesPropsData[] = []

    for (const key in moviesData.results) {
        if (moviesData.results.hasOwnProperty(key)) {
            const movie = moviesData.results[key]
            const posterPath = movie.poster_path
            const movieTitle = movie.title
            linksArray.push({ posterPath, movieTitle })
        }
    }

    for (const key in seriesData.results) {
        if (seriesData.results.hasOwnProperty(key)) {
            const series = seriesData.results[key]
            const posterPath = series.poster_path
            const movieTitle = series.name
            linksArray.push({ posterPath, movieTitle })
        }
    }

    return linksArray
}
