import { getGenreByIdData, getGenreTrendingPopularTopData } from '../../lib/fetchGenreApiData'

export default async function getGenreData(id: string) {
    let fetchedData

    if (
        id === 'popularMovies' ||
        id === 'popularSeries' ||
        id === 'trendingMovies' ||
        id === 'trendingSeries' ||
        id === 'topRatedMovies' ||
        id === 'topRatedSeries'
    ) {
        fetchedData = await getGenreTrendingPopularTopData(id)
    } else {
        fetchedData = await getGenreByIdData(id)
    }

    return fetchedData
}
