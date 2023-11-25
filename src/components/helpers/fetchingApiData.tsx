import { fullMoviesDataType, fullSeriesDataType } from './types'

const moviesLinks = [
    {
        type: 'Popular Movies',
        link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
    },
    {
        type: 'Top Rated Movies',
        link: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
    },
    { type: 'Trending Movies', link: 'https://api.themoviedb.org/3/trending/movie/week?language=en-US' },
    { type: 'Fantasy', link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=14' },
    { type: 'Horror', link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=27' },
    { type: 'Action', link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=28' },
    { type: 'History', link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=36' },
    { type: 'Documentary', link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=99' },
    { type: 'Romance', link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=10749' },
    { type: 'Family', link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=10751' },
]

const seriesLinks = [
    {
        type: 'Popular Series',
        link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc',
    },
    {
        type: 'Top Rated Series',
        link: 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1',
    },
    { type: 'Trending Series', link: 'https://api.themoviedb.org/3/trending/tv/week?language=en-US' },
    { type: 'Animation', link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=16' },
    { type: 'Drama', link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=18' },
    { type: 'Comedy', link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=35' },
    { type: 'Crime', link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=80' },
    { type: 'Mystery', link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=9648' },
    {
        type: 'Action & Adventure',
        link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=10759',
    },
    {
        type: 'Sci-Fi & Fantasy',
        link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=10765',
    },
    { type: 'War & Politics', link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=10768' },
]

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDBAPI_BEARER}`,
    },
}

const moviesDataFunc = (moviesData: fullMoviesDataType) => {
    let moviesArray = []

    for (const key in moviesData.results) {
        if (moviesData.results.hasOwnProperty(key)) {
            const movie = moviesData.results[key]
            const posterPath = movie.poster_path
            const movieTitle = movie.title
            const movieId = movie.id
            const movieVote = movie.vote_average

            moviesArray.push({ posterPath, movieTitle, movieId, movieVote })
        }
    }

    return moviesArray
}

const seriesDataFunc = (seriesData: fullSeriesDataType) => {
    let seriesArray = []

    for (const key in seriesData.results) {
        if (seriesData.results.hasOwnProperty(key)) {
            const series = seriesData.results[key]
            const posterPath = series.poster_path
            const movieTitle = series.name
            const movieId = series.id
            const movieVote = series.vote_average

            seriesArray.push({ posterPath, movieTitle, movieId, movieVote })
        }
    }

    return seriesArray
}

export const moviesGetDataFunc = async (link: string) => {
    try {
        const response = await fetch(link, options)
        const responsaData = await response.json()
        const fixedData = moviesDataFunc(responsaData)

        return fixedData
    } catch (error) {
        throw new Error('Failed to fetch movies data')
    }
}

export const seriesGetDataFunc = async (link: string) => {
    try {
        const response = await fetch(link, options)
        const responsaData = await response.json()
        const fixedData = seriesDataFunc(responsaData)

        return fixedData
    } catch (error) {
        throw new Error('Failed to fetch series data')
    }
}

export async function getAllBrowseMoviesData() {
    let moviesObj: { [key: string]: any } = {}

    const promises = moviesLinks.map(async (linkObj) => {
        const moviesDataType = linkObj.type
        const moviesDataLink = linkObj.link
        const fetchedMoviesData = await moviesGetDataFunc(moviesDataLink)

        moviesObj[moviesDataType] = fetchedMoviesData
    })

    await Promise.all(promises)

    return moviesObj
}

export async function getAllBrowseSeriesData() {
    let seriesObj: { [key: string]: any } = {}

    const promises = seriesLinks.map(async (linkObj) => {
        const seriesDataType = linkObj.type
        const seriesDataLink = linkObj.link
        const fetchedSeriesData = await seriesGetDataFunc(seriesDataLink)

        seriesObj[seriesDataType] = fetchedSeriesData
    })

    await Promise.all(promises)

    return seriesObj
}

export async function getAllSeriesGenres() {
    let seriesObj: { [key: string]: any } = {}

    const promises = seriesLinks.map(async (linkObj) => {
        const seriesDataType = linkObj.type
        const seriesDataLink = linkObj.link
        const fetchedSeriesData = await seriesGetDataFunc(seriesDataLink)

        seriesObj[seriesDataType] = fetchedSeriesData
    })

    await Promise.all(promises)

    return seriesObj
}
