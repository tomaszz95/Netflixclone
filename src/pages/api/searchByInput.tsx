import { searchMoviesByInput, searchSeriesByInput } from '../../components/helpers/fetchingApiData'

export const searchByInput = async (query: string, pathname: string) => {
    if (pathname === 'browse') {
        try {
            const moviesPromise = searchMoviesByInput(query)
            const seriesPromise = searchSeriesByInput(query)
            const [movies, series] = await Promise.all([moviesPromise, seriesPromise])

            const searchedMovies = [...movies, ...series]

            return searchedMovies
        } catch (error) {
            return []
        }
    } else if (pathname === 'tvshows') {
        try {
            const seriesPromise = searchSeriesByInput(query)
            const series = await Promise.all([seriesPromise])
            const searchedMovies = [...series[0]]

            return searchedMovies
        } catch (error) {
            return []
        }
    } else if (pathname === 'movies') {
        try {
            const moviesPromise = searchMoviesByInput(query)
            const movies = await Promise.all([moviesPromise])

            const searchedMovies = [...movies[0]]

            return searchedMovies
        } catch (error) {
            return []
        }
    }
}
