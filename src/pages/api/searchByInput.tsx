import { searchMoviesByInput, searchSeriesByInput } from '../../lib/searchApiData'

export const searchByInput = async (query: string, pathname: string, chosenUser: string) => {
    if (pathname === 'browse' || pathname === 'kids' || pathname === 'popular') {
        try {
            const moviesPromise = searchMoviesByInput(query, chosenUser)
            const seriesPromise = searchSeriesByInput(query, chosenUser)
            const [movies, series] = await Promise.all([moviesPromise, seriesPromise])

            const searchedMovies = [...movies, ...series]

            return searchedMovies
        } catch (error) {
            return []
        }
    } else if (pathname === 'tvshows') {
        try {
            const seriesPromise = searchSeriesByInput(query, chosenUser)
            const series = await Promise.all([seriesPromise])
            const searchedMovies = [...series[0]]

            return searchedMovies
        } catch (error) {
            return []
        }
    } else if (pathname === 'movies') {
        try {
            const moviesPromise = searchMoviesByInput(query, chosenUser)
            const movies = await Promise.all([moviesPromise])

            const searchedMovies = [...movies[0]]

            return searchedMovies
        } catch (error) {
            return []
        }
    }
}
