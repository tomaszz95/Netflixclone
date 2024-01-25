import { getOptions } from '../../lib/toFetchDataObjects'

export async function simpleSetupFetch() {
    try {
        const moviesResponse = await fetch(
            'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
            getOptions,
        )
        const moviesData = await moviesResponse.json()

        const seriesResponse = await fetch(
            'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1',
            getOptions,
        )
        const seriesData = await seriesResponse.json()

        return { moviesData, seriesData }
    } catch (error) {
        return { message: 'Failed to fetch data.. Try again later!' }
    }
}
