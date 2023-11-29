import { getOptions } from './toFetchDataObjects'
import { moviesDataFunc, seriesDataFunc } from './workWithFetchedData'

export async function searchMoviesByInput(keyword: string, user: string) {
    const link =
        user !== 'kids'
            ? `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=1`
            : `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=1&certification=G&certification_country=US&with_genres=12,16,10751`

    try {
        const response = await fetch(link, getOptions)
        const responseData = await response.json()
        const fixedData = moviesDataFunc(responseData)

        return fixedData
    } catch (error) {
        throw new Error('Failed to fetch series data')
    }
}

export async function searchSeriesByInput(keyword: string, user: string) {
    const link =
        user !== 'kids'
            ? `https://api.themoviedb.org/3/search/tv?query=${keyword}&include_adult=false&language=en-US&page=1`
            : `https://api.themoviedb.org/3/search/tv?query=${keyword}&include_adult=false&language=en-US&page=1&certification=G&certification_country=US&with_genres=16,10751,10762`

    try {
        const response = await fetch(link, getOptions)
        const responseData = await response.json()
        const fixedData = seriesDataFunc(responseData)

        return fixedData
    } catch (error) {
        throw new Error('Failed to fetch series data')
    }
}
