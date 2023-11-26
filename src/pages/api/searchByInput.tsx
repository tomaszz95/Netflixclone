import { searchMoviesByInput, searchSeriesByInput } from '../../components/helpers/fetchingApiData'

export const searchByInput = async (urlQuery: string) => {
    try {
        const moviesPromise = searchMoviesByInput(urlQuery)
        const seriesPromise = searchSeriesByInput(urlQuery)
        const [movies, series] = await Promise.all([moviesPromise, seriesPromise])

        const searchedMovies = [...movies, ...series]

        return searchedMovies
    } catch (error) {
        return []
    }
}
