import {
    getOptions,
    moviesGenreLinks,
    seriesGenreLinks,
    allSeriesLinks,
    allMoviesLinks,
    popularAndNewestSeries,
    popularAndNewestMovies,
    seriesGenreLinksKids,
    moviesGenreLinksKids,
} from './toFetchDataObjects'

import { moviesDataFunc, seriesDataFunc } from './workWithFetchedData'

export const moviesGetDataFunc = async (link: string) => {
    try {
        const response = await fetch(link, getOptions)
        const responseData = await response.json()
        const fixedData = moviesDataFunc(responseData)

        return fixedData
    } catch (error) {
        throw new Error('Failed to fetch movies data')
    }
}

export const seriesGetDataFunc = async (link: string) => {
    try {
        const response = await fetch(link, getOptions)
        const responseData = await response.json()
        const fixedData = seriesDataFunc(responseData)

        return fixedData
    } catch (error) {
        throw new Error('Failed to fetch series data')
    }
}

export async function getAllBrowseMoviesData(user: string) {
    let moviesObj: { [key: string]: any } = {}
    let array = user === 'browse' ? moviesGenreLinks : moviesGenreLinksKids

    const promises = array.map(async (linkObj) => {
        const moviesDataType = linkObj.type
        const moviesDataLink = linkObj.link
        const fetchedMoviesData = await moviesGetDataFunc(moviesDataLink)

        moviesObj[moviesDataType] = fetchedMoviesData
    })

    await Promise.all(promises)

    return moviesObj
}

export async function getAllBrowseSeriesData(user: string) {
    let seriesObj: { [key: string]: any } = {}
    let array = user === 'browse' ? seriesGenreLinks : seriesGenreLinksKids

    const promises = array.map(async (linkObj) => {
        const seriesDataType = linkObj.type
        const seriesDataLink = linkObj.link
        const fetchedSeriesData = await seriesGetDataFunc(seriesDataLink)

        seriesObj[seriesDataType] = fetchedSeriesData
    })

    await Promise.all(promises)

    return seriesObj
}

export async function getAllTVSeriesData() {
    let seriesObj: { [key: string]: any } = {}

    const promises = allSeriesLinks.map(async (linkObj) => {
        const seriesDataType = linkObj.type
        const seriesDataLink = linkObj.link
        const fetchedSeriesData = await seriesGetDataFunc(seriesDataLink)

        seriesObj[seriesDataType] = fetchedSeriesData
    })

    await Promise.all(promises)

    return seriesObj
}

export async function getAllMovieData() {
    let moviesObj: { [key: string]: any } = {}

    const promises = allMoviesLinks.map(async (linkObj) => {
        const moviesDataType = linkObj.type
        const moviesDataLink = linkObj.link
        const fetchedMoviesData = await moviesGetDataFunc(moviesDataLink)

        moviesObj[moviesDataType] = fetchedMoviesData
    })

    await Promise.all(promises)

    return moviesObj
}

export async function getAllPopularAndNewestData() {
    let moviesAndSeries: { [key: string]: any } = {}

    const promisesSeries = popularAndNewestSeries.map(async (linkObj) => {
        const seriesDataType = linkObj.type
        const seriesDataLink = linkObj.link
        const fetchedSeriesData = await seriesGetDataFunc(seriesDataLink)

        moviesAndSeries[seriesDataType] = fetchedSeriesData
    })

    const promisesMovies = popularAndNewestMovies.map(async (linkObj) => {
        const moviesDataType = linkObj.type
        const moviesDataLink = linkObj.link
        const fetchedMoviesData = await moviesGetDataFunc(moviesDataLink)

        moviesAndSeries[moviesDataType] = fetchedMoviesData
    })
    await Promise.all([...promisesSeries, ...promisesMovies])

    return moviesAndSeries
}
