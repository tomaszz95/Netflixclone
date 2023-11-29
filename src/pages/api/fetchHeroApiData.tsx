import { getHeroKidsData, getHeroMoviesData, getHeroSeriesData } from '../../components/APIHelpers/fetchHeroApiData'

export async function getAllHeroFetchedData() {
    const moviesData = await getHeroSeriesData()
    const seriesData = await getHeroMoviesData()
    const dataArray = [...moviesData, ...seriesData]

    return dataArray
}

export async function getSeriesHeroFetchedData() {
    const seriesData = await getHeroSeriesData()
    const dataArray = [...seriesData]

    return dataArray
}

export async function getMoviesHeroFetchedData() {
    const movieData = await getHeroMoviesData()
    const dataArray = [...movieData]

    return dataArray
}

export async function getKidsHeroFetchedData() {
    const kidsData = await getHeroKidsData()
    const dataArray = [...kidsData]

    return dataArray
}

export default async function getHeroHandler(pathname: string, chosenUser: string) {
    let fetchedData

    if (pathname === '/kids' || chosenUser === 'kids') {
        fetchedData = await getKidsHeroFetchedData()
    } else if (pathname === '/browse' || pathname === '/popular') {
        fetchedData = await getAllHeroFetchedData()
    } else if (pathname === '/tvshows') {
        fetchedData = await getSeriesHeroFetchedData()
    } else if (pathname === '/movies') {
        fetchedData = await getMoviesHeroFetchedData()
    }

    return fetchedData
}
