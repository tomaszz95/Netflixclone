import { moviesSingleDataFunc, seriesSingleDataFunc } from '../../components/APIHelpers/fetchSingleApiData'

export async function fetchSingleMovieData(movieId: string) {
    const movieData = await moviesSingleDataFunc(movieId)

    return {
        ...movieData,
    }
}

export async function fetchSingleSeriesData(seriesId: string) {
    const seriesData = await seriesSingleDataFunc(seriesId)

    return {
        ...seriesData,
    }
}

export async function fetchSingleData(queryType: string, queryId: string) {
    let fetchedData
    if (queryType === 'movie') {
        fetchedData = await fetchSingleMovieData(queryId)
    } else if (queryType === 'series') {
        fetchedData = await fetchSingleSeriesData(queryId)
    }

    return {
        ...fetchedData,
    }
}
