import { getOptions } from './toFetchDataObjects'
import { moviesDataFuncHero, seriesDataFuncHero } from './workWithFetchedData'

export async function getHeroSeriesData() {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1`, getOptions)
        const responseData = await response.json()
        const fixedData = seriesDataFuncHero(responseData)

        return fixedData
    } catch (error) {
        throw new Error('Failed to fetch series data')
    }
}

export async function getHeroMoviesData() {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`, getOptions)
        const responseData = await response.json()
        const fixedData = moviesDataFuncHero(responseData)

        return fixedData
    } catch (error) {
        throw new Error('Failed to fetch movie data')
    }
}

export async function getHeroBrowseData() {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc`,
            getOptions,
        )
        const responseData = await response.json()
        const fixedData = seriesDataFuncHero(responseData)

        return fixedData
    } catch (error) {
        throw new Error('Failed to fetch series data')
    }
}

export async function getHeroKidsData() {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16`,
            getOptions,
        )
        const responseData = await response.json()
        const fixedData = moviesDataFuncHero(responseData)

        return fixedData
    } catch (error) {
        throw new Error('Failed to fetch series data')
    }
}
