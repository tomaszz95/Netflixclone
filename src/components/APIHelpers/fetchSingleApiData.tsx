import { getOptions } from './toFetchDataObjects'
import { moviesDataFunc, seriesDataFunc } from './workWithFetchedData'
import {
    movieCrewSingleData,
    movieFullSingleData,
    seriesCrewSingleData,
    seriesFullSingleData,
} from './workWithSingleFetchedData'

export const moviesSingleDataFunc = async (movieId: string) => {
    try {
        const fullResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, getOptions)
        const crewResponse = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
            getOptions,
        )
        const similarResponse = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US`,
            getOptions,
        )

        const responseFullData = await fullResponse.json()
        const responseCrewData = await crewResponse.json()
        const responseSimilarData = await similarResponse.json()

        const filteredFullData = movieFullSingleData(responseFullData)
        const filteredCrewData = movieCrewSingleData(responseCrewData)
        const filteredSimilarData = moviesDataFunc(responseSimilarData)

        return { singleItem: filteredFullData, crewData: filteredCrewData, similar: filteredSimilarData }
    } catch (error) {
        throw new Error('Failed to fetch movies data')
    }
}

export const seriesSingleDataFunc = async (seriesId: string) => {
    try {
        const fullResponse = await fetch(`https://api.themoviedb.org/3/tv/${seriesId}?language=en-US`, getOptions)
        const crewResponse = await fetch(
            `https://api.themoviedb.org/3/tv/${seriesId}/credits?language=en-US`,
            getOptions,
        )
        const similarResponse = await fetch(
            `https://api.themoviedb.org/3/tv/${seriesId}/similar?language=en-US`,
            getOptions,
        )

        const responseFullData = await fullResponse.json()
        const responseCrewData = await crewResponse.json()
        const responseSimilarData = await similarResponse.json()
        const filteredFullData = seriesFullSingleData(responseFullData)
        const filteredCrewData = seriesCrewSingleData(responseCrewData)
        const filteredSimilarData = seriesDataFunc(responseSimilarData)

        return { singleItem: filteredFullData, crewData: filteredCrewData, similar: filteredSimilarData }
    } catch (error) {
        throw new Error('Failed to fetch movies data')
    }
}
