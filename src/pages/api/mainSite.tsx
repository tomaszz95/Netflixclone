import { getAllBrowseMoviesData, getAllBrowseSeriesData } from '../../components/helpers/fetchingApiData'

export async function getAllAPIFetchedData() {
    const moviesData = await getAllBrowseMoviesData()
    const seriesData = await getAllBrowseSeriesData()

    return {
        ...moviesData,
        ...seriesData,
    }
}
