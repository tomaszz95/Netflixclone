import { getOptions } from './toFetchDataObjects'
import { movieCrewSingleData, movieFullSingleData, seriesFullSingleData } from './workWithSingleFetchedData'

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

        console.log(filteredCrewData)

        return filteredFullData
    } catch (error) {
        throw new Error('Failed to fetch movies data')
    }
}

// export const seriesSingleDataFunc = async (seriesId: string) => {
//     try {
//         const response = await fetch(`https://api.themoviedb.org/3/tv/${seriesId}?credits?language=en-US`, getOptions)
//         const responseData = await response.json()
//         const filteredData = seriesSingleData(responseData)

//         return filteredData
//     } catch (error) {
//         throw new Error('Failed to fetch series data')
//     }
// }
