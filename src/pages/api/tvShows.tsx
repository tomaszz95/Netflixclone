import { NextApiRequest, NextApiResponse } from 'next'
import { heroMoviesFetchedData } from '../../components/helpers/types'

const initialType = {
    posterPath: '',
    movieTitle: '',
    movieOverview: '',
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const requestData = req.body

    let linksArray: heroMoviesFetchedData[] = [initialType]
    let urlLink =
        'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc'

    if (requestData.includes('kids')) {
        urlLink =
            'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&with_genres=16&language=en-US&page=1&sort_by=vote_count.desc'
    }

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDBAPI_BEARER}`,
        },
    }

    try {
        const seriesResponse = await fetch(urlLink, options)

        const seriesData = await seriesResponse.json()

        for (const key in seriesData.results) {
            if (seriesData.results.hasOwnProperty(key)) {
                const series = seriesData.results[key]
                const posterPath = series.backdrop_path
                const movieTitle = series.name
                const movieOverview = series.overview

                linksArray.push({ posterPath, movieTitle, movieOverview })
            }
        }

        const filteredSeriesData = linksArray.slice(1)

        const generateRandomIndex = () => Math.floor(Math.random() * filteredSeriesData.length)

        const randomIndex = generateRandomIndex()
        const singletvSeries = filteredSeriesData[randomIndex]

        res.status(200).json({ ...singletvSeries })
    } catch (error) {
        res.status(500).json({ message: 'Getting shows failed!' })
    }
}

export default handler
