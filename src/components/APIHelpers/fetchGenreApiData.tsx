import { fetchedMovieGenres, fetchedSeriesGenres } from '../helpers/siteText'
import { getOptions } from './toFetchDataObjects'
import { genrePopularNewTopMoviesSeries } from './toFetchDataObjects'
import { moviesDataFunc, seriesDataFunc } from './workWithFetchedData'

export const getGenreTrendingPopularTopData = async (id: string) => {
    const links = genrePopularNewTopMoviesSeries
        .map((genre) => {
            if (genre.name === id) {
                return { link1: genre.link1, link2: genre.link2 }
            } else {
                return null
            }
        })
        .filter(Boolean)
    console.log(links)
    if (links[0]?.link1.includes('/movie')) {
        try {
            const response1 = await fetch(links[0].link1, getOptions)
            const response2 = await fetch(links[0].link2, getOptions)
            const responseData1 = await response1.json()
            const responseData2 = await response2.json()
            const fixedData1 = moviesDataFunc(responseData1)
            const fixedData2 = moviesDataFunc(responseData2)

            return [...fixedData1, ...fixedData2]
        } catch (error) {
            throw new Error('Failed to fetch movies data')
        }
    } else if (links[0]?.link1.includes('/tv')) {
        try {
            const response1 = await fetch(links[0].link1, getOptions)
            const response2 = await fetch(links[0].link2, getOptions)
            const responseData1 = await response1.json()
            const responseData2 = await response2.json()
            const fixedData1 = seriesDataFunc(responseData1)
            const fixedData2 = seriesDataFunc(responseData2)

            return [...fixedData1, ...fixedData2]
        } catch (error) {
            throw new Error('Failed to fetch series data')
        }
    }
}

export const getGenreByIdData = async (id: string) => {
    const idAsString = String(id)
    const isMovieGenre = fetchedMovieGenres.some((genre) => genre.id.toString() === idAsString)
    const isSeriesGenre = fetchedSeriesGenres.some((genre) => genre.id.toString() === idAsString)

    if (isMovieGenre && isSeriesGenre) {
        const responseMovies = await fetch(
            `https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=${idAsString}&page=1`,
            getOptions,
        )
        const responseMoviesData = await responseMovies.json()
        const fixedDataMovies = moviesDataFunc(responseMoviesData)

        const responseSeries = await fetch(
            `https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=${idAsString}&page=1`,
            getOptions,
        )
        const responseSeriesData = await responseSeries.json()
        const fixedDataSeries = seriesDataFunc(responseSeriesData)

        return [...fixedDataMovies, ...fixedDataSeries]
    } else if (isMovieGenre) {
        const responseMovies1 = await fetch(
            `https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=${idAsString}&page=1`,
            getOptions,
        )
        const responseMoviesData1 = await responseMovies1.json()
        const fixedDataMovies1 = moviesDataFunc(responseMoviesData1)

        const responseMovies2 = await fetch(
            `https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=${idAsString}&page=2`,
            getOptions,
        )
        const responseMoviesData2 = await responseMovies2.json()
        const fixedDataMovies2 = moviesDataFunc(responseMoviesData2)
        console.log(fixedDataMovies1, fixedDataMovies2)
        return [...fixedDataMovies1, ...fixedDataMovies2]
    } else if (isSeriesGenre) {
        const responseSeries1 = await fetch(
            `https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=${idAsString}&page=1`,
            getOptions,
        )
        const responseSeriesData1 = await responseSeries1.json()
        const fixedDataSeries1 = seriesDataFunc(responseSeriesData1)

        const responseSeries2 = await fetch(
            `https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=${idAsString}&page=2`,
            getOptions,
        )
        const responseSeriesData2 = await responseSeries2.json()
        const fixedDataSeries2 = seriesDataFunc(responseSeriesData2)

        return [...fixedDataSeries1, ...fixedDataSeries2]
    } else {
        return []
    }
}
