import { getAllTVSeriesData } from '../../components/helpers/fetchingApiData'

export async function getAllAPIFetchedDataShows() {
    const seriesData = await getAllTVSeriesData()

    return {
        ...seriesData,
    }
}
